'use strict';

const Joi = require('joi');

module.exports.post = {
  body: {
    userId: Joi.number()
      .integer()
      .positive()
      .label('userId')
      .required(),
    messageText: Joi.string()
      .trim()
      .label('Message text')
      .required()
  }
};
