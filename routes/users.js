'use strict';

const express = require('express');
const router = express.Router();

const boom = require('boom');
const bcrypt = require('bcrypt-as-promised');
const { camelizeKeys, decamelizeKeys } = require('humps');
// const ev = require('express-validation');
// const validations = require('../validations/topics');
const jwt = require('jsonwebtoken');
const knex = require('../knex');

router.post('/api/users', (req, res, next) => {
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
      const user = {firstName, lastName, email, aboutMe, avatarId, phone, hashedPassword };
      const row = decamelizeKeys(user);

      return knex('users').insert(row, '*');
    })
    .then((rows) => {
      const user = camelizeKeys(rows[0]);

      delete user.hashedPassword;
      console.log(user.id);
      return user;
    })
    .then((user) => {
      const expiry = new Date(Date.now() + 1000 * 60 * 60 * 3);

      const token = jwt.sign({ userId: user.id}, process.env.SECRET, { expiresIn: '3h' });

      res.cookie('accessToken', token, {
        httpOnly: true,
        expires: expiry,
        secure: router.get('env') === 'production'
      });

      res.cookie('loggedIn', true, {
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
    .then((user) => {
      if (!user) {
        return next();
      }
      res.send(user);
    })
    .catch((err) => {
      next(boom.wrap(err));
    });
});

module.exports = router;
