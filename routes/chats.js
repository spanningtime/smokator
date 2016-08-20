'use strict';

const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');
const jwt = require('jsonwebtoken');

const router = express.Router(); // eslint-disable-line new-cap

router.post('/api/chats', (req, res, next) => {
  const { bummerId, giverId } = req.body;
  const expiration = new Date(Date.now() + 1000 * 60 * 60 * 1);
  const row = decamelizeKeys({ bummerId, giverId, expiration });
  knex('chats')
    .insert(row, '*')
    .then((rows) => {
      const chat = camelizeKeys(rows[0]);

      res.send(chat);
    })
    .catch((err) => {
      next(boom.wrap(err));
    });
});

module.exports = router;
