import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import PoliceIcon from 'assets/police.js';
import OtherIcon from 'assets/other.js';
import TruckIcon from 'assets/truckBlack.js';
import BomberoIcon from 'assets/bombero';
import AmbulanceIcon from 'material-ui/svg-icons/maps/local-hospital';

import {green500, red500, blue500} from 'material-ui/styles/colors';

const iconsStyle = { verticalAlign: 'middle' }
const iconsObject = {
  "AMBULANCIA" : <div><AmbulanceIcon style={iconsStyle} color={red500} /></div>,
  "GRUA" : <div><SvgIcon style={iconsStyle}color={'yellow'}><TruckIcon /></SvgIcon></div>,
  "POLICIA" : <div><SvgIcon style={iconsStyle} color={green500}><PoliceIcon  /></SvgIcon></div>,
  "BOMBEROS" : <div><SvgIcon style={iconsStyle} color={red500}><BomberoIcon  /></SvgIcon></div>,
  "OTRO" : <div><SvgIcon style={iconsStyle} color={blue500}><OtherIcon  /></SvgIcon></div>
}

const Icons = ({type}) => (
  iconsObject[type]
)


export default Icons;
