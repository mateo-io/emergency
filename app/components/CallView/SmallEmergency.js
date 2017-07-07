import React from "react";
import H2 from 'components/H2';
import Text from 'components/Text';
import PaperBox from 'components/PaperBox';
import TimePicker from 'material-ui/TimePicker';

import SvgIcon from 'material-ui/SvgIcon';
import PoliceIcon from 'assets/police.js';
import OtherIcon from 'assets/other.js';
import OtherIcon2 from 'assets/other2.js';
import TruckIcon from 'assets/truck.js';
import Arrow from 'assets/arrow.js';
import BomberoIcon from 'assets/bombero';
import AmbulanceIcon from 'material-ui/svg-icons/maps/local-hospital';
import FontIcon from 'material-ui/FontIcon';

import NavigationArrowDropDownCircle from 'material-ui/svg-icons/navigation/arrow-drop-down-circle';

//BUTTON ADD
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';


/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */



class SmallEmergency extends React.Component {



  getType = (key) => {
    switch (key) {
      case 1:
      return this.props.type;
      break;

      case 2:
      return this.props.type2;
      break;

      case 3:
      return this.props.type3;

      case 4:
      return this.props.type4;

      default:

    }
  }

  getSelectedIndex = (type) => {
    const servicesIndex = {
      "AMBULANCIA" : 0,
      "GRUA" : 1,
      "POLICIA" : 2,
      "BOMBEROS" : 3,
      "CARROTALLER" : 4,
      "OTRO" : 5
    }
    return servicesIndex[type]
  }

  state = {
    selectedIndex: this.getSelectedIndex(this.props.type),
    selectedIndex2: this.getSelectedIndex(this.props.type2),
    selectedIndex3: this.getSelectedIndex(this.props.type3),
    selectedIndex4: this.getSelectedIndex(this.props.type4),
    alert: false
  };

  selectIndex = (key) => {
    console.log("***********************");
    console.log("Index: ", key);
    console.log("SelectedIndex: ", this.state.selectedIndex)
    switch (key) {
      case 1:
        return this.state.selectedIndex;
      case 2:
        return this.state.selectedIndex2;
      case 3:
        return this.state.selectedIndex3;
      case 4:
        return this.state.selectedIndex4;
      case 5:
        return this.state.selectedIndex5;
      default:

    }
    return this.state
  }

  select = (index, key) => {
    console.log("Select called!", key)
    const servicesIndex = {
      0 : "AMBULANCIA",
      1 : "GRUA",
      2 : "POLICIA",
      3 : "BOMBEROS",
      4 : "CARROTALLER",
      5 : "OTRO"
    }
    switch (key) {
      case 1:
        this.setState({selectedIndex: index});
        this.props.editType(this.props.callId, servicesIndex[index] )
        break;
      case 2:
        this.setState({selectedIndex2: index});
        this.props.editType2(this.props.callId, servicesIndex[index] )
        break;

      case 3:
        this.setState({selectedIndex3: index});
        this.props.editType3(this.props.callId, servicesIndex[index] )
        break;
      case 4:
        this.setState({selectedIndex4: index});
        this.props.editType4(this.props.callId, servicesIndex[index] )
        break;
      default:
      break;
    }
  }

  handleAddService = () => {
    this.props.addService(this.props.callId)
  }


  render() {

    let scenes = [];

const updateDispatched1 = (evt) => {
    if(this.props.dispatched1) { return true }
    this.props.serviceDispatched(this.props.callId, new Date())
  }

const updateDispatched2 = (evt) => {
    if(this.props.dispatched2) { return true }
    this.props.serviceDispatched2(this.props.callId, new Date())
  }

const updateDispatched3 = (evt) => {
    if(this.props.dispatched3) { return true }
    this.props.serviceDispatched3(this.props.callId, new Date())
  }

const updateDispatched4 = (evt) => {
    if(this.props.dispatched4) { return true }
    this.props.serviceDispatched4(this.props.callId, new Date())
  }

const updateArrived1 = () => {
    if(this.props.arrived1) { return true }
    if(this.props.dispatched1){
      this.props.serviceArrived(this.props.callId, new Date())
    } else {
      alert("Primero debe despachar el servicio.")
    }
  }

const updateArrived2 = () => {
    if(this.props.arrived2) { return true }
    if(this.props.dispatched2){
      this.props.serviceArrived2(this.props.callId, new Date())
    } else {
      alert("Primero debe despachar el servicio.")
    }
  }

const updateArrived3 = () => {
    if(this.props.arrived3) { return true }
    if(this.props.dispatched3){
      this.props.serviceArrived3(this.props.callId, new Date())
    } else {
      alert("Primero debe despachar el servicio.")
    }
  }


const updateArrived4 = () => {
    if(this.props.arrived4) { return true }
    if(this.props.dispatched4){
      this.props.serviceArrived4(this.props.callId, new Date())
    } else {
      alert("Primero debe despachar el servicio.")
    }
  }


const  dispatchedIndex = (param) => {
    switch(param) {
    case 1:
      return this.props.dispatched1;
    case 2:
      return this.props.dispatched2;
    case 3:
      return this.props.dispatched3;
    case 4:
      return this.props.dispatched4;
    default:
      return this.props.dispatched1;
    }
  }


const  arrivedIndex = (param) => {
    switch(param) {
    case 1:
      return this.props.arrived1;
    case 2:
      return this.props.arrived2;
    case 3:
      return this.props.arrived3;
    case 4:
      return this.props.arrived4;
    default:
      return this.props.arrived1;
    }
  }

const  functionJson = (param) => {
    switch(param) {
    case "updateDispatched1":
      return updateDispatched1
    case "updateDispatched2":
      return updateDispatched2
    case "updateDispatched3":
      return updateDispatched3
    case "updateDispatched4":
      return updateDispatched4
    default:
      return updateDispatched1
    }
  }

const  functionJson2 = (param) => {
    switch(param) {
    case "updateArrived1":
      return updateArrived1
    case "updateArrived2":
      return updateArrived2
    case "updateArrived3":
      return updateArrived3
    case "updateArrived4":
      return updateArrived4
    default:
      return updateArrived1
    }
  }

        for(let i = 1; i<=this.props.services; i++) {
          let dispatchedFunction = functionJson('updateDispatched'+(i))
          let arrivedFunction = functionJson2('updateArrived'+(i))

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
              BOMBEROS: 'red',
              CARROTALLER: 'blue',
              OTRO: 'blue'
            }
          }

          const divStyle = { position: 'relative', height: 'auto' }
          const iconStyle ={height: '30px', width: '30px'}

          styles.icon = []
          styles.icon[0] = styles.default_icon;
          styles.icon[1] = styles.default_icon;
          styles.icon[2] = styles.default_icon;
          styles.icon[3] = styles.default_icon;
          styles.icon[4] = styles.default_icon;
          styles.icon[5] = styles.default_icon;

          styles.icon[this.selectIndex(i)] = Object.assign({},   styles.icon[this.selectIndex(i)], styles.active_icon);
      scenes.push(<div key={i} className="type__icons col-sm-3" style={ divStyle }>

          <BottomNavigation style={ divStyle } selectedIndex={this.getSelectedIndex(this.getType(i))}>

            <div>

            <BottomNavigationItem
              key={1}
              label="Ambulancia"
              style={ {textAlign: '-webkit-center'} }
              icon={<AmbulanceIcon color={styles.icon[0]['AMBULANCIA']} style={ iconStyle } />}
              onTouchTap={() => this.select(0, i)}
            />
            <BottomNavigationItem
              key={2}
              style={ {textAlign: '-webkit-center'} }
              label="Grua"
              icon={<SvgIcon color={styles.icon[1]['GRUA']}  style={ iconStyle }><TruckIcon /></SvgIcon>}
              onTouchTap={() => this.select(1, i)}
            />
            <BottomNavigationItem
              key={3}
              style={ {textAlign: '-webkit-center'} }
              label="Policia"
              icon={<SvgIcon color={styles.icon[2]['POLICIA']} style={iconStyle}><PoliceIcon /></SvgIcon>}
              onTouchTap={() => this.select(2, i)}
            />
            </div>

            <div>

            <BottomNavigationItem
              key={4}
              style={ {textAlign: '-webkit-center'} }
              label="Bomberos"
              icon={<SvgIcon color={styles.icon[3]['BOMBEROS']} style={iconStyle}>
                <BomberoIcon />
              </SvgIcon>}
              onTouchTap={() => this.select(3, i)}
            />



            <BottomNavigationItem
              key={5}
              label="CarroTaller"
              icon={<SvgIcon color={styles.icon[4]['CARROTALLER']} style={iconStyle}>
                <OtherIcon />
              </SvgIcon>}
              onTouchTap={() => this.select(4, i)}
            />

            <BottomNavigationItem
              key={6}
              style={ {textAlign: '-webkit-center'} }
              label="Otro"
              icon={<SvgIcon color={styles.icon[5]['OTRO']} style={iconStyle}>
                <OtherIcon2 />
              </SvgIcon>}
              onTouchTap={() => this.select(5, i)}
            />

            </div>
          </BottomNavigation>


        <div style={{textAlign: 'center', padding: '0px 30px'}} className="row">
          <div className="row type__time__selector">

            <div className="col-sm-4">
              <h5>Despacho</h5>
              <NavigationArrowDropDownCircle
              style={ {height: '40px', width: '40px'}}
              color={dispatchedIndex(i) ? '#e4d539' : 'grey'}
              onClick={dispatchedFunction}
              />
            </div>

            <div className="col-sm-4">
              <h5>Llegada</h5>
              <NavigationArrowDropDownCircle
              style={ {height: '40px', width: '40px'}}
              color={arrivedIndex(i) ? 'green' : 'grey'}
              onClick={arrivedFunction}
              />
            </div>
          </div>
        </div>


        </div>)




        }
















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
        BOMBEROS: 'red',
        OTRO: 'blue'
      }
    }

    styles.icon = []
    styles.icon[0] = styles.default_icon;
    styles.icon[1] = styles.default_icon;
    styles.icon[2] = styles.default_icon;
    styles.icon[3] = styles.default_icon;
    styles.icon[4] = styles.default_icon;
    styles.icon[this.getSelectedIndex(this.props.type)] = Object.assign({},   styles.icon[this.state.selectedIndex], styles.active_icon);
    const divStyle = { position: 'relative', height: 'auto' }
    const iconStyle ={height: '30px', width: '30px'}

    return (
      <PaperBox style={ {minHeight: '240px', height: 'auto'}} center blank zDepth={2}>
      {this.props.services < 4 ?
      <div style={{position: 'absolute', right: '10%', top: '40%', zIndex: '3'}}>

    <FloatingActionButton onTouchTap={this.handleAddService} primary={true} style={{height: '50px', width: '50px'}}>
      <ContentAdd />
    </FloatingActionButton>
      </div>

      : ''
       }
      {scenes}
      </PaperBox>
    );
  }
}

export default SmallEmergency;
