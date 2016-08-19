'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('chats', (table) => {
    table.increments();
    table.integer('bummer_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
    table.integer('giver_id')
      .references('id')
      .inTable('users')
      onDelete('CASCADE');
    table.dateTime('expiration');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('chats');
};
