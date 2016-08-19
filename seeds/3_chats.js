'use strict';

exports.seed = function(knex) {
  return knex('chats').del()
    .then(() => {
      return knex('chats').insert([{
        id: 1,
        bummer_id: 1,
        giver_id: 2,
        expiration: new Date('2016-08-15 15:36:16 UTC'),
        created_at: new Date('2016-08-15 14:36:16 UTC'),
        updated_at: new Date('2016-08-15 14:36:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('chats_id_seq', (SELECT MAX(id) FROM chats));"
      );
    });
};
