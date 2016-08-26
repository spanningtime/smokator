'use strict';

/* eslint-disable semi */

exports.up = function(knex) {
  return knex.schema.createTable('chat_messages', (table) => {
    table.increments();
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
    table.integer('chat_id')
      .notNullable()
      .references('id')
      .inTable('chats')
      .onDelete('CASCADE');
    table.text('message_text')
      .notNullable()
    table.dateTime('expiration');
    table.timestamps(true, true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('chat_messages')
};
