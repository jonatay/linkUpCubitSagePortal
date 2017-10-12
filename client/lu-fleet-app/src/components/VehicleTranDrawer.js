/*
    Jono : 17 10 11
    VehicleTranDrawer : React Class Component
*/
import React from 'react';

import Drawer from 'react-md/lib/Drawers/Drawer';
import Toolbar from 'react-md/lib/Toolbars/Toolbar';
import Button from 'react-md/lib/Buttons/Button';

import VehicleTranTable from './VehicleTranTable';


class VehicleTranDrawer extends React.Component {
  state = { visible: false, vehicleId: 0, fromDate: null, toDate: null };

  componentWillReceiveProps(nextProps) {
    if (nextProps.vehicleId > 0) {
      this.setState({ ...nextProps, visible: nextProps.vehicleId > 0 });
    }
  };

  closeDrawer = () => {
    this.setState({ visible: false });
  };

  handleVisibility = (visible) => {
    this.setState({ visible: this.state.vehicleId > 0 });
  };

  onMediaTypeChange = () => {
    /*(Drawer.DrawerTypes.TEMPORARY, {
    mobile: true,
    tablet: false,
    desktop: false,
  });*/
  }

  render() {
    const { visible, vehicleId, fromDate, toDate } = this.state;
    const closeBtn = <Button icon onClick={this.closeDrawer}>close</Button>;
    return (
      <Drawer
        id="vehicle-detail"
        type={Drawer.DrawerTypes.CLIPPED}
        visible={visible}
        position={'right'}
        onVisibilityChange={this.handleVisibility}
        onMediaTypeChange={this.onMediaTypeChange}
        header={(
          <Toolbar
            nav={closeBtn}
            className="md-divider-border md-divider-border--bottom"
          />
        )}
      >
        <VehicleTranTable
          vehicleId={vehicleId}
          fromDate={fromDate}
          toDate={toDate}
        />
      </Drawer>
    );
  }
};

export default VehicleTranDrawer;
