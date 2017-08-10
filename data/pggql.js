/**
 * Created by Jono on 17 07 26.
 */
import postgraphql from 'postgraphql';

const pggql = postgraphql('postgres://postgres:dsa@localhost/linkup',
  ['hr', 'gl', 'coy', 'auth', 'fleet'],
  {
    graphiql: true,
    graphqlRoute: '/api/pgg/graphql',
    graphiqlRoute: '/api/pgg/graphiql',
    watchPg: true,
    enableCors: true,
  }
);

export default pggql;
