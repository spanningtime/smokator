'use strict';

const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');
const jwt = require('jsonwebtoken');

const router = express.Router(); //eslint-disable-line new-cap

router.get('/api/places', (req, res, next) => {

  knex('')
})
