'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('phone').unique().notNullable().defaultTo('');
    table.integer('avatar_id').notNullable().defaultTo(0);
    table.string('email').unique().notNullable().defaultTo('');
    table.text('about_me').notNullable().defaultTo('');
    table.specificType('hashed_password', 'char(60)').notNullable();
    table.string('first_name').notNullable().defaultTo('');
    table.string('last_name').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
