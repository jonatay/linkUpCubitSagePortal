
import gql from 'graphql-tag';

const GetVehicleTran = gql`
query getVehicleTran($iVehicleId: Int, $iFrom: Date, $iTo: Date) {
  getVehicleTran(iVehicleId: $iVehicleId, iFrom: $iFrom, iTo: $iTo)
}
`;


export default GetVehicleTran;