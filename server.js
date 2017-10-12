// import express from 'express';
// import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
// import bodyParser from 'body-parser';
// import schema from './data/schema';
//
// const GRAPHQL_PORT = 3000;
//
// const graphQLServer = express();
//
// graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
// graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
//
// graphQLServer.listen(GRAPHQL_PORT, () => console.log(
//   `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
// ));

// jrt 170726 all the above is niftily replaced by postgraphql.
// revisit when need mssql
import path from 'path';
import express from 'express';

import webpack from 'webpack';
import config from './webpack.config.dev';
import initServer from './server/index';

const app = express();

const compiler = webpack(config);

import Raven from 'raven';
Raven.config('https://41bd8af0e8e946388f99e7d92ceb7504:42479f273925424fb77046790a52c40c@sentry.io/228199').install();


initServer(app, (err, res) => {

  app.listen(3001, 'localhost', function (err) {
    if (err) {
      console.log(err);
      return;
    }

    console.log('Listening at http://localhost:3001');
  });

})


// app.listen();

// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: config.output.publicPath
// }));
//
// app.use(require('webpack-hot-middleware')(compiler));
//
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });