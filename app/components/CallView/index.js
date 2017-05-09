import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import PropTypes from 'prop-types';
import StatusBar from './StatusBar';

      export default class CallView extends React.Component {

        render() {
          const { call, actions } = this.props;
          const { callStart, status, origin, poste,
             comments, type, dispatched, arrived } = call[0];
          console.log("Call is: ", call)
          return (
            <div>
              <StatusBar origin={origin} poste={poste} status={status} />
            </div>
          )
        }

  }
