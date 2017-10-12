/**
 * Created by Jono on 17 07 28.
 */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import VehicleGetByRoleDaterange from '../queries/VehicleGetByRoleDaterange'
import Vehicle from './Vehicle';
import MyErrorBoundry from './MyErrorBoundry';

class VehicleList extends Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.object,
      vehicleGetByRoleDaterange: PropTypes.array,
    }).isRequired,
    // router: PropTypes.object.isRequired,
  }

  render() {
    // return (<h1>Nada</h1>)
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    } else return (
      <div>
        <MyErrorBoundry>
          {this.props.data.vehicleGetByRoleDaterange.map((vehicle, i) => (
              <div key={i} type="flex">
                <div span={6}>
                  <Vehicle {...this.props} i={i} vehicle={vehicle}/>
                </div>
              </div>
            )
          )}
        </MyErrorBoundry>
      </div>
    );
  }
};

const VehicleListWithData = graphql(VehicleGetByRoleDaterange)(VehicleList);

export default VehicleListWithData;
