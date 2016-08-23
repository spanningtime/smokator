'use strict';

const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');
const jwt = require('jsonwebtoken');
const { checkAuth } = require('../middleware.js');

const router = express.Router(); // eslint-disable-line new-cap

router.get('/api/givers/:placeId', (req, res, next) => {
  const placeId = (req.params.placeId);

  knex.select('first_name', 'about_me', 'avatar_id', 'phone', 'user_id', 'place_id', 'expiration')
    .from('users')
    .innerJoin('givers', 'users.id', 'givers.user_id')
    .where('expiration', '>', new Date(Date.now()))
    .andWhere('place_id', placeId)
    .orderBy('first_name')
    .then((rows) => {
      const givers = camelizeKeys(rows);
      console.log(givers);
      res.send(givers);
    })
    .catch((err) => {
      next(err);
    });
});


// router.get('/api/givers/:userId', (req, res, next) => {
//   const userId = Number.parseInt(req.params.userId);
//
//   knex.select('first_name', 'about_me', 'avatar_id', 'phone', 'user_id', 'place_id')
//     .from('users')
//     .innerJoin('givers', 'users.id', 'givers.user_id')
//     .where('expiration', '>', Date.now())
//     .andWhere('place_id', placeId)
//     .orderBy('first_name')
//     .then((rows) => {
//       const givers = camelizeKeys(rows);
//
//       res.send(givers);
//     })
//     .catch((err) => {
//       next(err);
//     });
// })

router.post('/api/givers', checkAuth, (req, res, next) => {
  const { userId, placeId } = req.body;
  const expiration = new Date(Date.now() + 1000 * 60 * 60 * 3 );
  const row = decamelizeKeys({ userId, placeId, expiration });

  knex('givers')
    .insert(row, '*')
    .then((rows) => {
      const giver = camelizeKeys(rows[0]);

      res.send(giver);
    })
    .catch((err) => {
      next(boom.wrap(err));
    });
});

module.exports = router;
