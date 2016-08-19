'use strict';

exports.seed = function(knex) {
  return knex('chat_messages').del()
    .then(() => {
      return knex('chat_messages').insert([{
        id: 1,
        user_id: 1,
        chat_id: 1,
        message_text: 'Hey you here?',
        created_at: new Date('2016-08-15 14:36:26 UTC'),
        updated_at: new Date('2016-08-15 14:36:26 UTC')
      },
      {
        id: 2,
        user_id: 2,
        chat_id: 1,
        message_text: 'Yeah.',
        created_at: new Date('2016-08-15 14:56:26 UTC'),
        updated_at: new Date('2016-08-15 14:56:26 UTC')
      },
      {
        id: 3,
        user_id: 2,
        chat_id: 1,
        message_text: 'Got virginia slims',
        created_at: new Date('2016-08-15 14:57:06 UTC'),
        updated_at: new Date('2016-08-15 14:57:06 UTC')
      }
      {
        id: 4,
        user_id: 1,
        chat_id: 1,
        message_text: 'Can you meet me at the door?',
        created_at: new Date('2016-08-15 14:57:26 UTC'),
        updated_at: new Date('2016-08-15 14:57:26 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('chat_messages_id_seq', (SELECT MAX(id) FROM chat_messages));"
      );
    });
};
