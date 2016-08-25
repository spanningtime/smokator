'use strict';

const Joi = require('joi');

module.exports.post = {
  body: {
    firstName: Joi.string()
      .trim()
      .required(),
    lastName: Joi.string()
      .trim()
      .required(),
    phone: Joi.string()
      .trim()
      .required()
      .min(10),
    email: Joi.string()
      .trim()
      .required(),
    password: Joi.string()
      .trim()
      .required()
      .min(5)
  }
};
