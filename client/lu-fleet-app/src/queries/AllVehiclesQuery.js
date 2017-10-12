import gql from 'graphql-tag';
const AllVehiclesQuery = gql`
  query VehiclesrQuery 
{
  allVehicles {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        registration,
        name,
        fleetTransactionsByVehicleId (condition:{taxYear:2018,taxMonth:8}) {
          totalCount
          edges {
            node {
              transactionDate
              amount
              driverByDriverId {
                name
              }
              fleetTranTypeByTranTypeId {
                name
              }
              fleetTranGroupByTranGroupId {
                name
              }
              merchantByMerchantId {
                name,
                town
              }
            }
          }
        }
      }
    }
  }
}
`;

export default AllVehiclesQuery;