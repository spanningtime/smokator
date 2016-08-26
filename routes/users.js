'use strict';

/* eslint-disable arrow-body-style */

const express = require('express');
const router = express.Router(); // eslint-disable-line new-cap

const boom = require('boom');
const bcrypt = require('bcrypt-as-promised');
const { camelizeKeys, decamelizeKeys } = require('humps');
const ev = require('express-validation');
const validations = require('../validations/users');
const jwt = require('jsonwebtoken');
const knex = require('../knex');

router.post('/api/users', ev(validations.post), (req, res, next) => {
  const { email, password } = req.body;

  knex('users')
    .select(knex.raw('1=1'))
    .where('email', email)
    .first()
    .then((exists) => {
      if (exists) {
        throw boom.badRequest('This email is already registered');
      }

      return bcrypt.hash(password, 12);
    })
    .then((hashedPassword) => {
      const { firstName, lastName, aboutMe, avatarId, phone } = req.body;
      const user = { firstName, lastName, email, aboutMe, avatarId, phone,
        hashedPassword };
      const row = decamelizeKeys(user);

      return knex('users').insert(row, '*');
    })
    .then((rows) => {
      const user = camelizeKeys(rows[0]);

      delete user.hashedPassword;

      return user;
    })
    .then((user) => {
      const expiry = new Date(Date.now() + 1000 * 60 * 60 * 3);

      const token = jwt.sign({ userId: user.id }, process.env.SESSION_SECRET,
        { expiresIn: '3h' });

      res.cookie('accessToken', token, {
        httpOnly: true,
        expires: expiry,
        secure: router.get('env') === 'production'
      });

      res.cookie('loggedIn', true, {
        expires: expiry,
        secure: router.get('env') === 'production'
      });

      res.cookie('userId', user.id, {
        expires: expiry,
        secure: router.get('env') === 'production'
      });

      res.send(user);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/api/users/:userId', (req, res, next) => {
  const userId = Number.parseInt(req.params.userId);

  knex('users')
    .where('id', userId)
    .then((rows) => {
      if (!rows) {
        return next();
      }
      const user = camelizeKeys(rows[0]);

      delete user.hashedPassword;

      res.send(user);
    })
    .catch((err) => {
      next(boom.wrap(err));
    });
});

router.get('/api/users/chats/:chatId', (req, res, next) => {
  const chatId = Number.parseInt(req.params.chatId);

  knex('chats')
    .where('id', chatId)
    .first()
    .then((row) => {
      return camelizeKeys(row);
    })
    .then((chat) => {
      return knex('users')
        .where('id', chat.bummerId)
        .orWhere('id', chat.giverId)
        .then((rows) => {
          if (!rows) {
            return next();
          }

          const users = {
            bummerId: chat.bummerId,
            giverId: chat.giverId
          };

          for (const row of rows) {
            if (row.id === chat.bummerId) {
              users.bummerName = row.first_name;
            }
            else {
              users.giverName = row.first_name;
            }
          }

          res.send(users);
        }) // eslint-disable-line semi
    })
    .catch((err) => {
      next(boom.wrap(err));
    });
});

module.exports = router;
