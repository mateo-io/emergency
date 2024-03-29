import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import PropTypes from 'prop-types';
import { Link, Route, Redirect } from 'react-router-dom';
import Call from 'containers/Call';
import * as constants from 'constants/Colors';

import SvgIcon from 'material-ui/SvgIcon';
import PoliceIcon from 'assets/police.js';
import OtherIcon from 'assets/other.js';
import OtherIcon2 from 'assets/other2.js';
import TruckIcon from 'assets/truckBlack.js';
import BomberoIcon from 'assets/bombero';
import AmbulanceIcon from 'material-ui/svg-icons/maps/local-hospital';
import RoadBlockIcon from 'assets/roadBlock.js';
import {blue400, red500, green500} from 'material-ui/styles/colors';


export default class CallTabs extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const iconsStyle = { verticalAlign: 'middle' }
    const iconsObject = {
      "AMBULANCIA" : <div><AmbulanceIcon style={iconsStyle} color={red500} /></div>,
      "GRUA" : <div><SvgIcon style={iconsStyle}color={'yellow'}><TruckIcon /></SvgIcon></div>,
      "POLICIA" : <div><SvgIcon style={iconsStyle} color={green500}><PoliceIcon  /></SvgIcon></div>,
      "BOMBEROS" : <div><SvgIcon style={iconsStyle} color={red500}><BomberoIcon  /></SvgIcon></div>,
      "CARROTALLER" : <div><SvgIcon style={iconsStyle} color={blue400}><OtherIcon  /></SvgIcon></div>,
      "BLOQUEOS" : <div><SvgIcon style={iconsStyle} color={red500}><RoadBlockIcon /></SvgIcon></div>,
      "OTRO" : <div><SvgIcon style={iconsStyle} color={blue400}><OtherIcon2  /></SvgIcon></div>

    }


    const { calls, actions } = this.props;
    return (
      <div>
        <Tabs
        inkBarStyle={ {background: constants.primary, height: "8px"} }
        >

        {calls && calls.map( (call) => {
          return (
              <Tab
              containerElement={ <Link to={`/dashboard/call/${call.id}`} /> }
              style={ {background: constants.lightPrimary,
              color: constants.secondaryText }}
              key={call.id}
              icon={ iconsObject[call.type] }
              label={(call.uniqueid ? '\u2713 ' : '') + call.status + ' ' + (call.origin ? call.origin : '')}
            />
            )
          })
        } </Tabs>
        <Route path={`/dashboard/call/:id`} component={Call}/>
        </div>
      )
    }
  }
