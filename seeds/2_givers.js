'use strict';

exports.seed = function(knex) {
  return knex('givers').del()
    .then(() => {
      return knex('givers').insert([{
        id: 1,
        user_id: 2,
        place_id: 'ChIJG2K5JrtqkFQRsT22hSRqrrc',
        expiration: new Date('2016-08-15 17:26:16 UTC')
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('givers_id_seq', (SELECT MAX(id) FROM givers));"
      );
    });
};
