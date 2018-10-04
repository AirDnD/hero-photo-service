const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '18.144.2.186',
    database: 'photos',
    user: 'other_user',
    password: 'otherhacker',
  },
});

module.exports = knex;
