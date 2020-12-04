// Update with your config settings.

module.exports = {
    local: {
      client: 'mysql',
      connection: {
        host: '127.0.0.1',
        database: 'todounesp',
        user:     'root',
        password: 'fema1997'
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
        database: 'todounesp',
        user:     'root',
        password: 'fema1997'
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
  