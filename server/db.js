// import { Pool, Client } from 'pg';
export default callback => {
  // const pool = new Pool({
  //   user: 'postgres',
  //   host: 'localhost',
  //   database: 'linkup',
  //   password: 'dsa'
  // })
  // connect to a database if needed, then pass it to `callback`:
  var promise = require('bluebird');

  var options = {
    // Initialization Options
    promiseLib: promise
  };

  var pgp = require('pg-promise')(options);
  var connectionString = 'postgres://postgres:dsa@localhost:5432/linkup';
  var db = pgp(connectionString);
  callback(db);
}
