import React from "react";
import H2 from 'components/H2';
import Text from 'components/Text';
import PaperBox from 'components/PaperBox';

import SvgIcon from 'material-ui/SvgIcon';
import PoliceIcon from 'assets/police.js';
import TruckIcon from 'assets/truck.js';
import AmbulanceIcon from 'material-ui/svg-icons/maps/local-hospital';


import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';


/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class EmergencySelector extends React.Component {
  getSelectedIndex = (type) => {
    const servicesIndex = {
      "AMBULANCIA" : 0,
      "GRUA" : 1,
      "POLICIA" : 2
    }
    return servicesIndex[type]
  }

  state = {
    selectedIndex: this.getSelectedIndex(this.props.type),
  };


  select = (index) => {
    const servicesIndex = {
      0 : "AMBULANCIA",
      1 : "GRUA",
      2 : "POLICIA"
    }
    this.setState({selectedIndex: index});
    this.props.editType(this.props.callId, servicesIndex[index] )
  }

  render() {
    return (
      <PaperBox blank zDepth={3}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Ambulancia"
            icon={<AmbulanceIcon style={ {height: '100px', width: '100px'}} />}
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Grua"
            icon={<SvgIcon style={ {height: '100px', width: '100px'}}><TruckIcon /></SvgIcon>}
            onTouchTap={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Policia"
            icon={<SvgIcon style={ {height: '100px', width: '100px'}}><PoliceIcon /></SvgIcon>}
            onTouchTap={() => this.select(2)}
          />
        </BottomNavigation>
      </PaperBox>
    );
  }
}

export default EmergencySelector;
