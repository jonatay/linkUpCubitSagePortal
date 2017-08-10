import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  //Link
} from 'react-router-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import 'tachyons';
import './App.css';
import FleetContainer from './components/FleetContainer';


const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:3001/api/pgg/graphql'}),
  dataIdFromObject: o => o.id
});


class App extends Component {
  render() {
    return (
      <div className="App">
        <ApolloProvider client={client}>
          <Router>
            <Route path='/' component={FleetContainer}/>
              {/*<IndexRedirect to='/1' />*/}
              {/*<Route path='/:page' component={FleetList} />*/}
            {/*</Route>*/}
            {/*<Route path='/view/:pokemonId' component={PokemonPage} />*/}
            {/*<Route path='/create/:trainerId' component={AddPokemonCard} />*/}
          </Router>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
