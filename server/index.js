import bodyParser from 'body-parser';
import initializeDb from './db';
import middleware from './middleware';
import api from './api';
import config from './config.json';
import pggql from './postgraphql/pggql';

export default (app, callback) => {

  app.use(bodyParser.urlencoded({
    parameterLimit: 1000000,
    limit: '50mb',
    extended: true
  }));
  app.use(bodyParser.json());
  // log requests
  var logger = function (req, res, next) {
    console.log(`REQUEST for ${req.url}`);
    //console.log(req.body);
    next(); // Passing the request to the next handler in the stack.
  };
  app.use(logger);
  // init postgraphql
  app.use(pggql);
  // connect to db
  initializeDb(db => {
    // internal middleware
    app.use(middleware({ config, db }));
    // api router
    app.use('/api', api({ config, db }));
    callback(null, 'all ok');

  });
}