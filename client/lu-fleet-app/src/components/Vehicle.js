import React from 'react';

import createReactClass from 'create-react-class';

const Vehicle = createReactClass({
  render() {
    return (
      <div>
        <h3>{this.props.vehicle.registration}</h3>
        <p>{this.props.vehicle.name}</p>
      </div>
    );
  }
});

export default Vehicle;
