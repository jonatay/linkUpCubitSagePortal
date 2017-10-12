import gql from 'graphql-tag';

const VehicleGetByRoleDaterange = gql`
query Vehicles($iRole: String, $iFrom: Date, $iTo: Date) {
  vehicleGetByRoleDaterange(iRole: $iRole, iFrom: $iFrom, iTo: $iTo)
}
`;


export default VehicleGetByRoleDaterange;