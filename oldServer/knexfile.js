// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'asterisk',
      user:     'asterisk',
      password: 'seblap1234'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'asterisk',
      user:     'asterisk',
      password: 'seblap1234'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
