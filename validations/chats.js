'use strict';

const Joi = require('joi');

module.exports.post = {
  body: {
    bummerId: Joi.number()
      .integer()
      .positive()
      .label('BummerId')
      .required(),
    giverId: Joi.number()
      .integer()
      .positive()
      .label('GiverId')
      .required()
  }
};
