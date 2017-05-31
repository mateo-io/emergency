import React from "react";
import H2 from 'components/H2';
import Text from 'components/Text';
import PaperBox from 'components/PaperBox';
import TimePicker from 'material-ui/TimePicker';

import SvgIcon from 'material-ui/SvgIcon';
import PoliceIcon from 'assets/police.js';
import OtherIcon from 'assets/other.js';
import TruckIcon from 'assets/truck.js';
import Arrow from 'assets/arrow.js';
import AmbulanceIcon from 'material-ui/svg-icons/maps/local-hospital';
import FontIcon from 'material-ui/FontIcon';

import NavigationArrowDropDownCircle from 'material-ui/svg-icons/navigation/arrow-drop-down-circle';

import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';


/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class EmergencySelector extends React.Component {
  getSelectedIndex = (type) => {
    console.log("getSelectedIndex ", type)
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
    dispatched: false,
    arrived: false,
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

  updateDispatched = () => {
    if(this.props.dispatched) { return true }
    this.props.serviceDispatched(this.props.callId, new Date())
  }

  updateArrived = () => {
    if(this.props.arrived) { return true }
    if(this.props.dispatched){
      this.props.serviceArrived(this.props.callId, new Date())
    } else {
      alert("Primero debe despachar el servicio.")
    }
  }


  render() {

    console.log("This props", this.props)
    let { callId, type } = this.props;
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
    styles.icon[this.getSelectedIndex(this.props.type)] = Object.assign({},   styles.icon[this.state.selectedIndex], styles.active_icon);
    const divStyle = { position: 'relative', height: 'auto' }

    return (
      <PaperBox style={ {minHeight: '220px', height: 'auto'}} center blank zDepth={2}>
        <div className="type__icons" style={ divStyle }>
          <BottomNavigation style={ divStyle } selectedIndex={this.getSelectedIndex(this.props.type)}>
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

        <div style={divStyle} className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 type__time__selector">
            <div className="col-md-4">
              <h4>Despacho</h4>
              <NavigationArrowDropDownCircle
              style={ {height: '50px', width: '50px'}}
              color={this.props.dispatched && '#e4d539'}
              onClick={this.updateDispatched}
              />
            </div>

            <div className="col-md-4">
              <h4>Llegada</h4>
              <NavigationArrowDropDownCircle
              style={ {height: '50px', width: '50px'}}
              disable={true}
              color={this.props.arrived && 'green'}
              onClick={this.updateArrived}
              />
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </PaperBox>
    );
  }
}

export default EmergencySelector;
