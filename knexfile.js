// Update with your config settings.
require("./app/helpers/envHelper");

module.exports = {
    local: {
      client: 'mysql',
      connection: {
        host: process.env.DATABASE_HOST,
        database: process.env.DATABASE_NAME,
        user:     process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'migrations'
      }
    },
  
    development: {
      client: 'mysql',
      version: '5.6',
      connection: {
        database: process.env.DATABASE_NAME,
        user:     process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'migrations'
      }
    },
  
    hml: {
      client: 'mysql',
      connection: {
        database: 'moria',
        user:     'root',
        password: ''
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'migrations'
      }
    },
  
    prod: {
      client: 'mysql',
      connection: {
        database: 'moria',
        user:     'root',
        password: ''
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'migrations'
      }
    }
  
  };
  