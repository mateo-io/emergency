import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import PoliceIcon from 'assets/police.js';
import OtherIcon from 'assets/other.js';
import OtherIcon2 from 'assets/other2.js';
import TruckIcon from 'assets/truckBlack.js';
import BomberoIcon from 'assets/bombero';
import AmbulanceIcon from 'material-ui/svg-icons/maps/local-hospital';
import RoadBlockIcon from 'assets/roadBlock.js';

import {green500, red500, blue400} from 'material-ui/styles/colors';

const iconsStyle = { verticalAlign: 'middle', display: 'inline-block' }
const divStyle = {display: 'inline-block'}
const iconsObject = {
  "AMBULANCIA" : <div style={divStyle}><AmbulanceIcon style={iconsStyle} color={red500} /></div>,
  "GRUA" : <div style={divStyle}><SvgIcon style={iconsStyle}color={'yellow'}><TruckIcon /></SvgIcon></div>,
  "POLICIA" : <div style={divStyle}><SvgIcon style={iconsStyle} color={green500}><PoliceIcon  /></SvgIcon></div>,
  "BOMBEROS" : <div style={divStyle}><SvgIcon style={iconsStyle} color={red500}><BomberoIcon  /></SvgIcon></div>,
  "CARROTALLER" : <div style={divStyle}><SvgIcon style={iconsStyle} color={blue400}><OtherIcon  /></SvgIcon></div>,
  "BLOQUEOS" : <div style={divStyle}><SvgIcon style={iconsStyle} color={red500}><RoadBlockIcon  /></SvgIcon></div>,
  "OTRO" : <div style={divStyle}><SvgIcon style={iconsStyle} color={blue400}><OtherIcon2  /></SvgIcon></div>,
  undefined : <div style={divStyle}> tipo - </div>
}

const Icons = ({type}) => (
  iconsObject[type]
)


export default Icons;
