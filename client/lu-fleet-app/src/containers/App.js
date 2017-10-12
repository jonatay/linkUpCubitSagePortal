import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  //Link
} from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import './App.css';
import FleetContainer from './FleetContainer';
import AppToolbar from '../components/AppToolbar';
import client from '../apollo-client';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppToolbar />
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
