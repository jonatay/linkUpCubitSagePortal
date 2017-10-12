/*
    Jono : 17 10 10
    MyErrorBoundry : React Class Component
*/
import React from 'react';
import logException from '../util/logException';

class MyErrorBoundry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }
  componentDidCatch(error, info) {
    this.setState(state=>({ ...state, hasError:true}));
    logException(error, info);
  }
  render() {
    if (this.state.hasError) {
      return <div>Sorry, something went pearshaped</div>
    } else {
      return this.props.children;
    }
  }
};

export default MyErrorBoundry;
