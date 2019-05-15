// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/lambda.db3'
    },
    pool: {
      afterCreate: (conn, done) =>{
      },
    },
    migrations: {
      directory: './data/migrations',
    },
  },
};
