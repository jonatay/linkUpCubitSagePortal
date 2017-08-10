import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


import FleetList from './FleetList';



class FleetContainer extends Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.object,
      Trainer: PropTypes.object,
    }).isRequired,
    router: PropTypes.object.isRequired,
  }

  render() {
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }
    return (
      <FleetList/>
    );
  }
}

const VoucherQuery = gql`
  query VoucherQuery 
  {
    allVouchers(
     condition : {cutOffDate: "201702"}, 
    orderBy: TRANSACTION_DATE_ASC) 
  {
    edges {
      node {
        nodeId
        id
        cutOffDate
        accountNumber
        accountName
        costCentre
        costCentreName
        registration
        batch
        driverName
        vehicleDescription
        transactionDate
        processDate
        merchantName
        merchantTown
        oilCompany
        odometer
        fuelLitres
        oilLitres
        privateUsage
        warnings
        tollLane
        tollVehicleClass
        tollTransactionType
        tollMatchIndicator
        amount
        tollDiscount
        vehicleId
        purchaseTypeId
        costCentreId
      }
    }
  }
  }
`

const FleetContainerWithData = graphql(VoucherQuery)(FleetContainer);

FleetContainer.propTypes = {};
FleetContainer.defaultProps = {};

export default FleetContainerWithData;
