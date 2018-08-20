const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    database: 'ringosanchez',
    user: 'ringosanchez',
  },
});

module.exports = knex;
