import ApolloClient, { createNetworkInterface } from 'apollo-client';


const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:3001/api/pgg/graphql'}),
  dataIdFromObject: o => o.id
});

export default client;