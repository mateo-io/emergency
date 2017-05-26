import React from "react";
import H2 from 'components/H2';
import Text from 'components/Text';
import PaperBox from 'components/PaperBox';
import TimePicker from 'material-ui/TimePicker';

import SvgIcon from 'material-ui/SvgIcon';
import PoliceIcon from 'assets/police.js';
import OtherIcon from 'assets/other.js';
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
      "POLICIA" : 2,
      "OTRO" : 3
    }
    return servicesIndex[type]
  }

  state = {
    selectedIndex: this.getSelectedIndex(this.props.type),
    alert: false
  };


  select = (index) => {
    const servicesIndex = {
      0 : "AMBULANCIA",
      1 : "GRUA",
      2 : "POLICIA",
      3 : "OTRO"
    }
    this.setState({selectedIndex: index});
    this.props.editType(this.props.callId, servicesIndex[index] )
  }

  updateDispatched = (evt, date) => {
    this.props.serviceDispatched(this.props.callId, date)
  }

  updateArrived = (evt, date) => {
	console.log("Dispatched: ", this.props.dispatched)
	console.log("Arrived: ", date)
    if ( (this.props.dispatched-date) > 0) {

      console.log('alert true bitch')
      this.state.alert = true;
    } else {
      this.state.alert = false;
    }
    this.props.serviceArrived(this.props.callId, date)
  }

  render() {

    const { callId, type } = this.props;
    var styles = {
      default_icon:{
        color: 'blue',
        backgroundColor: 'white',
        fontWeight: 400,
      },
      active_icon: {
        AMBULANCIA: 'red',
        GRUA: '#e9e820',
        POLICIA: 'green',
        OTRO: 'blue'
      }
    }

    styles.icon = []
    styles.icon[0] = styles.default_icon;
    styles.icon[1] = styles.default_icon;
    styles.icon[2] = styles.default_icon;
    styles.icon[3] = styles.default_icon;
    styles.icon[this.state.selectedIndex] = Object.assign({},   styles.icon[this.state.selectedIndex], styles.active_icon);

    return (
      <PaperBox style={ {minHeight: '220px'}} center blank zDepth={2}>
        <div className="type__icons" style={ {height: '70%'} }>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
              key={1}
              label="Ambulancia"
              style={ {textAlign: '-webkit-center'} }
              icon={<AmbulanceIcon color={styles.icon[0]['AMBULANCIA']} style={ {height: '100px', width: '100px'}} />}
              onTouchTap={() => this.select(0)}
            />
            <BottomNavigationItem
              key={2}
              label="Grua"
              icon={<SvgIcon color={styles.icon[1]['GRUA']}  style={ {height: '100px', width: '120px'}}><TruckIcon /></SvgIcon>}
              onTouchTap={() => this.select(1)}
            />
            <BottomNavigationItem
              key={3}
              label="Policia"
              icon={<SvgIcon color={styles.icon[2]['POLICIA']} style={ {height: '100px', width: '120px'}}><PoliceIcon /></SvgIcon>}
              onTouchTap={() => this.select(2)}
            />
            <BottomNavigationItem
              key={4}
              label="Otro"
              icon={<SvgIcon color={styles.icon[3]['OTRO']} style={ {height: '100px', width: '120px'}}>
                <OtherIcon />
              </SvgIcon>}
              onTouchTap={() => this.select(3)}
            />
          </BottomNavigation>
        </div>
        {this.state.alert ? <div style={ {
          display: 'inline',
          top: '-20px',
          position: 'relative',
          backgroundColor: 'red'
          }}>Hora de llegada menor a despacho</div>: ''}
        <div className="type__time__selector">
          Despacho
          <TimePicker
            key={1}
            value={this.props.dispatched}
            style={ {display: 'inline', padding: "0px 30px"} }
            format="24hr"
            hintText="Hora de despacho"
            autoOk={true}
            onChange={this.updateDispatched.bind(this)}
          />
          Llegada
          <TimePicker
            key={2}
            disabled={this.props.dispatched==undefined}
            value={this.props.arrived}
            style={ {display: 'inline', padding: '0px 30px'} }
            format="24hr"
            hintText="Hora de llegada"
            autoOk={true}
            onChange={this.updateArrived.bind(this)}
          />
        </div>
      </PaperBox>
    );
  }
}

export default EmergencySelector;
