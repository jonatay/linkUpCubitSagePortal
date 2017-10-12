import React, {
  Component,
} from 'react';
// import PropTypes from 'prop-types';

// import VehicleList from '../components/VehicleList';
import VehicleTable from '../components/VehicleTable';
import VehicleTranDrawer from '../components/VehicleTranDrawer'
import Toolbar from 'react-md/lib/Toolbars/Toolbar';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';


const DEFAULT_DATE = new Date();
const ONE_MONTH_BEFORE = new Date(DEFAULT_DATE);
ONE_MONTH_BEFORE.setMonth(DEFAULT_DATE.getMonth() - 1);

const FORMAT_OPTIONS = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
};

class FleetContainer extends Component {
  state = {
    visible: false,
    vehicleId: 0,
    fromDate: ONE_MONTH_BEFORE,
    toDate: DEFAULT_DATE
  };

  setVehicleId(vehicleId) {
    this.setState({ vehicleId: vehicleId });
  }

  /**
   * The `onChange` callback provides the current formatted time string followed
   * by the `Date` value and the event that triggered the change.
   *
   * @param {String} value - the current value's formatted string
   * @param {Date} dateValue - the current value
   * @param {Event} event - the event that triggered the change.
   */
  handleStartDateChange = (fromDate, dateValue, event) => { // eslint-disable-line no-unused-vars
    this.setState({ fromDate });
  };

  handleEndDateChange = (toDate, dateValue, event) => { // eslint-disable-line no-unused-vars
    this.setState({ toDate });
  };


  render() {
    const { vehicleId, fromDate, toDate } = this.state;
    return (
      <div>
        <Toolbar themed={true}>
          <DatePicker
            id="inline-date-picker-auto"
            label="From Date"
            inline
            fullWidth={false}
            autoOk={true}
            locales="en-ZA"
            formatOptions={FORMAT_OPTIONS}
            value={fromDate}
            onChange={this.handleStartDateChange}
          />
          <DatePicker
            id="inline-date-picker-auto"
            label="To Date"
            inline
            fullWidth={false}
            autoOk={true}
            locales="en-ZA"
            formatOptions={FORMAT_OPTIONS}
            value={toDate}
            onChange={this.handleEndDateChange}
          />
        </Toolbar>
        <VehicleTable
          userRole={'manager'}
          fromDate={fromDate}
          toDate={toDate}
          setVehicleId={(vehicleId) => {
            this.setVehicleId(vehicleId);
          }}/>
        <VehicleTranDrawer vehicleId={vehicleId}
                           fromDate={fromDate}
                           toDate={toDate}/>
      </div>
    )
  }
}


export default FleetContainer;