'use strict';

const boom = require('boom');
const express = require('express');
const request = require('request-promise');

const router = express.Router(); // eslint-disable-line new-cap

router.get('/api/places/:location', (req, res, next) => {
  const { location } = req.params;

  request({ uri: // eslint-disable-next-line max-len
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=200&type=bar&key=AIzaSyAFgyrpeZwrVMRD9zu5o8qNFOVH6FlO1Ps`,
    json: true })
      .then((response) => {
        if (response.results.length === 0) { // eslint-disable-next-line max-len
          throw boom.create(400, 'There are no bars in your area. Try again later.');
        }

        const bars = response.results.map((bar) => {
          const name = bar.name;
          const placeId = bar.place_id;

          return { name, placeId };
        });

        return res.send(bars);
      })
      .catch((err) => {
        next(boom.wrap(err));
      });
});

module.exports = router;
