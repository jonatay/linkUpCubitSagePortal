/*
    Jono : 17 10 11
    VehicleTranTable : React Class Component
*/
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DataTable from 'react-md/lib/DataTables/DataTable';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import TableBody from 'react-md/lib/DataTables/TableBody';
import AccessibleFakeInkedButton from 'react-md/lib/Helpers/AccessibleFakeInkedButton';
import dateFormat from 'dateformat';

import sortBy from 'lodash/sortBy';

import { graphql } from 'react-apollo';
import GetVehicleTran from '../queries/GetVehicleTran';


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


class VehicleTranTable extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.object,
      getVehicleTran: PropTypes.array,
    }).isRequired
  }

  state = {
    ascending: false,
    sortField: 'registration',
    sortedTrans: []
  };

  defaultColumns = [
    { field: 'transaction_date', caption: 'Date' },
    { field: 'tran_type', caption: 'Tran Type' },
    { field: 'amount', caption: 'Amount', numeric: true },
    { field: 'tran_group', caption: 'Tran Group' },
    { field: 'merchant', caption: 'Merchant', numeric: true },
    { field: 'merchant_town', caption: 'Town', numeric: true }
  ]

  componentWillReceiveProps(nextProps) {

    if (nextProps.data.getVehicleTran) {
      const sortedTrans = sortBy(nextProps.data.getVehicleTran, this.state.sortField);
      if (this.state.ascending) {
        sortedTrans.reverse();
      }
      this.setState({sortedTrans});
    }
  };


  sort = (key) => {
    let sortField = this.state.sortField;
    const ascending = (sortField === key) ? !this.state.ascending : false;
    let sortedTrans;
    if (key === sortField) {
      sortedTrans = this.state.sortedTrans.slice();
      sortedTrans.reverse();
    } else {
      sortField = key;
      sortedTrans = sortBy(this.state.sortedTrans, sortField);
    }
    this.setState({ ascending, sortField, sortedTrans });
  };

  render() {
    const { ascending, sortField, sortedTrans } = this.state;
    const rows = sortedTrans.map((row) => (
      <TableRow key={row.id}>
        <TableColumn>{dateFormat(row.transaction_date, "yy-mm-dd")}</TableColumn>
        <TableColumn>{row.tran_type}</TableColumn>
        <TableColumn>{row.amount}</TableColumn>
        <TableColumn>{row.tran_group}</TableColumn>
        <TableColumn>{row.merchant}</TableColumn>
        <TableColumn>{row.merchant_town}</TableColumn>
      </TableRow>
    ));
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    } else {
      return (
        <DataTable plain baseId="movies">
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
};


const VehicleTranTableWithData = graphql(GetVehicleTran, {
  options: ({ vehicleId, fromDate, toDate }) => ({
    variables: {
      iVehicleId: vehicleId,
      iFrom: fromDate,
      iTo: toDate
    }
  }),
})(VehicleTranTable);

export default VehicleTranTableWithData;

