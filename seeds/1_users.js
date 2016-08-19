'use strict';

exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        id: 1,
        email: 'shanelovesbeer@beer.com',
        hashed_password: '$2a$12$Q3fh1jeJZ2Q19Yr12aVOxO54a/IvBhS01qWCqxNAZc0ABRxq0NnYq',
        first_name: 'Shane',
        last_name: 'Quest',
        phone: '8289871902',
        about_me: 'I used to do drugs. I still do but I used to too.',
        avatar_id: 3,
        created_at: new Date('2016-07-23 14:26:16 UTC'),
        updated_at: new Date('2016-07-23 14:26:16 UTC')
      },
      {
        id: 2,
        email: 'blainelovescigs@cigs.com',
        hashed_password: '$2a$12$Q3fh1jeQZ2Q19Yr12aVOxO54a/IvBhS01qWCqxNAZc0ABRxq0NnYq',
        first_name: 'Blaine',
        last_name: 'Stewart',
        phone: '2069871902',
        about_me: 'I just love getting together with my bros and throwing down. Boot and rally bro!',
        avatar_id: 5,
        created_at: new Date('2016-07-25 14:26:16 UTC'),
        updated_at: new Date('2016-07-25 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    });
};
