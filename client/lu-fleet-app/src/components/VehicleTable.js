import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DataTable from 'react-md/lib/DataTables/DataTable';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import TableBody from 'react-md/lib/DataTables/TableBody';
import AccessibleFakeInkedButton from 'react-md/lib/Helpers/AccessibleFakeInkedButton';
import { sortBy } from 'lodash/collection';
import NumberFormat from 'react-number-format';


import { graphql } from 'react-apollo';

import VehicleGetByRoleDaterange from '../queries/VehicleGetByRoleDaterange';

//import { vehicles } from 'constants/sampleData';

class MyTableHeader extends PureComponent {
  handleClick = () => {
    this.props.onHeaderClick(this.props.field);
  }

  render() {
    return (
      <TableColumn sorted={(this.props.sortField === this.props.field) ? this.props.ascending : null}
                   role="button"
                   header={true}
                   numeric={this.props.numeric}
                   onClick={this.handleClick}>
        <AccessibleFakeInkedButton className="md-btn">
          <span>{this.props.caption}</span>
        </AccessibleFakeInkedButton>
      </TableColumn>
    );
  }
}

class VehicleTable extends PureComponent {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.object,
      Vehicles: PropTypes.array,
    }).isRequired,
    // router: PropTypes.object.isRequired,
  }

  state = {
    ascending: false,
    sortField: 'registration',
    sortedVehicles: []
  };

  defaultColumns = [
    { field: 'registration', caption: 'Registration' },
    { field: 'name', caption: 'Name' },
    { field: 'driver', caption: 'Driver' },
    { field: 'odometer', caption: 'Odometer', numeric: true },
    { field: 'mileage', caption: 'Mileage', numeric: true },
    { field: 'amount_fuel', caption: 'Fuel Cost', numeric: true },
    { field: 'amount_other', caption: 'Other Cost', numeric: true }
  ]

  componentWillReceiveProps(nextProps) {
    if (nextProps.data.vehicleGetByRoleDaterange &&
      nextProps.data.vehicleGetByRoleDaterange.length > 0 &&
      nextProps.data.vehicleGetByRoleDaterange[0].id) {
      let addAmt = (accum, tran) => {
        return accum + tran.amount;
      }
      let sortedVehicles = sortBy(nextProps.data.vehicleGetByRoleDaterange, this.state.sortField);
      sortedVehicles = sortedVehicles.map((vehicle) => ({
        ...vehicle,
        driver: vehicle.driver.name,
        mileage: vehicle.close_odometer - vehicle.open_odometer,
        amount_fuel: vehicle.transactions.filter((tran) => (tran.tran_type_name === 'Fuel')).reduce(addAmt, 0),
        amount_other: vehicle.transactions.filter((tran) => (tran.tran_type_name !== 'Fuel')).reduce(addAmt, 0)
      }))
      this.setState({ sortedVehicles });
    }
  }

  sort = (key) => {
    let sortField = this.state.sortField;
    const ascending = (sortField === key) ? !this.state.ascending : false;
    let sortedVehicles;
    if (key === sortField) {
      sortedVehicles = this.state.sortedVehicles.slice();
      sortedVehicles.reverse();
    } else {
      sortField = key;
      sortedVehicles = sortBy(this.state.sortedVehicles, sortField);
    }
    this.setState({ ascending, sortField, sortedVehicles });
  };

  selectVehicle = (vehicleId) => {
    this.props.setVehicleId(vehicleId);
  }

  render() {
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    } else {
      const { ascending, sortField, sortedVehicles } = this.state;
      // const sortedVehicles = sortBy(this.props.data.vehicleGetByRoleDaterange,'registration');
      const rows = sortedVehicles.map((row) => (
        <TableRow key={row.id} onClick={() => {
          this.selectVehicle(row.id)
        }}>
          <TableColumn>{row.registration}</TableColumn>
          <TableColumn>{row.name}</TableColumn>
          <TableColumn>{row.driver}</TableColumn>
          <TableColumn numeric={true}>
            <NumberFormat value={Math.floor(row.open_odometer / 1000)}
                          displayType={'text'}
                          thousandSeparator={true}
                          suffix={' - '}/>
            <NumberFormat value={Math.floor(row.close_odometer / 1000)}
                          displayType={'text'}
                          thousandSeparator={true}
                          suffix={' k'}/>
          </TableColumn>
          <TableColumn numeric={true}>
            <NumberFormat value={row.mileage}
                          displayType={'text'}
                          thousandSeparator={true}
                          suffix={' km'}/>
          </TableColumn>
          <TableColumn numeric={true}>
            <NumberFormat value={Math.floor(row.amount_fuel)}
                          displayType={'text'}
                          thousandSeparator={true}
                          prefix={'R '}/>
          </TableColumn>
          <TableColumn numeric={true}>
            <NumberFormat value={Math.floor(row.amount_other)}
                          displayType={'text'}
                          thousandSeparator={true}
                          prefix={'R '}/>
          </TableColumn>
        </TableRow>
      ));
      return (
        <DataTable plain baseId="vehicles">
          <TableHeader>
            <TableRow>
              {this.defaultColumns.map(({ field, caption, numeric }) => (
                <MyTableHeader
                  key={field}
                  field={field}
                  caption={caption}
                  onHeaderClick={this.sort}
                  sortField={sortField}
                  ascending={ascending}
                  numeric={numeric}
                />
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows}
          </TableBody>
        </DataTable>
      );

    }
  }
}

const VehicleTableWithData = graphql(VehicleGetByRoleDaterange, {
  options: ({ userRole, fromDate, toDate }) => ({
    variables: {
      iRole: userRole,
      iFrom: fromDate,
      iTo: toDate
    }
  }),
})(VehicleTable);

export default VehicleTableWithData;