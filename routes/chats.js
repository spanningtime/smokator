'use strict';

const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');
const jwt = require('jsonwebtoken');

const router = express.Router(); // eslint-disable-line new-cap

router.post('/api/chats', (req, res, next) => {
  const { bummerId, giverId } = req.body;
  const expiration = new Date(Date.now() + 1000 * 60 * 60);
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

router.post('/api/chats/:chatId', (req, res, next) => {
  const chatId = Number.parseInt(req.params.chatId);
  console.log(chatId);
  const { userId, messageText } = req.body;
  const expiration = new Date(Date.now() + 1000 * 60 * 60);
  const row = decamelizeKeys({ userId, chatId, messageText, expiration });

  knex('chat_messages')
    .insert(row, '*')
    .then((rows) => {
      const chatMessage = camelizeKeys(rows[0]);

      res.send(chatMessage);
    })
    .catch((err) => {
      next(boom.wrap(err));
    });
});

module.exports = router;
