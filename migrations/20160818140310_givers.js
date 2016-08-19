'use strict';


exports.up = function(knex) {
  return knex.schema.createTable('givers', (table) => {
    table.increments();
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.string('place_id')
      .notNullable()
      .unique();
    table.dateTime('expiration');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('givers');
};
