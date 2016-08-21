'use strict';

const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');
const jwt = require('jsonwebtoken');
const request = require('request-promise');

const router = express.Router(); //eslint-disable-line new-cap

router.get('/api/places', (req, res, next) => {
  console.log('hello');
  const { location } = req.body

  request({ uri:
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=100&type=bar&key=AIzaSyAFgyrpeZwrVMRD9zu5o8qNFOVH6FlO1Ps`,
    json: true })
      .then((response) => {
        if (response.results.length === 0) {
          throw boom.create(400, 'There are no bars in your area. Try again later.');
        }

        const bars = response.results.map((bar) => {
          const name = bar.name;
          const placeId = bar.place_id;
          return { name, placeId };
        });

        return res.send(bars)
      })
      .catch((err) => {
        next(boom.wrap(err));
      });
})

module.exports = router;
