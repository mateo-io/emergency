import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';
import Call from 'containers/Call';
import * as constants from 'constants/Colors';

import SvgIcon from 'material-ui/SvgIcon';
import PoliceIcon from 'assets/police.js';
import TruckIcon from 'assets/truck.js';
import AmbulanceIcon from 'material-ui/svg-icons/maps/local-hospital';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';


export default class CallTabs extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const iconsObject = {
      "AMBULANCIA" : <AmbulanceIcon color={red500} />,
      "GRUA" : <SvgIcon color={greenA200}><TruckIcon /></SvgIcon>,
      "POLICIA" : <PoliceIcon />
    }

    const { calls, actions } = this.props;
    return (
      <div>
        <Tabs
        inkBarStyle={ {background: constants.primary, height: "5px"} }
        >
        {calls.map( (call) => {

          return (
              <Tab
              containerElement={ <Link to={`/dashboard/call/${call.id}`} /> }
              style={ {background: constants.lightPrimary,
              color: constants.secondaryText }}
              key={call.id}
              icon={ iconsObject[call.type] }
              label={call.origin}
            />
            )
          })
        } </Tabs>
        <Route path={`/dashboard/call/:id`} component={Call}/>
        {this.props.children}
        </div>
      )
    }
  }
