'use strict';

const Joi = require('joi');

module.exports.post = {
  body: {
    userId: Joi.number()
      .integer()
      .positive()
      .label('userId')
      .required(),
    placeId: Joi.string()
      .label('placeId')
      .required()
  }
};
