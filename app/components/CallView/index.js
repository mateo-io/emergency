import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import PropTypes from 'prop-types';
import StatusBar from './StatusBar';
import EmergencySelector from './EmergencySelector';

export default class CallView extends React.Component {

  render() {
    const { call, actions } = this.props;
    const { id, callStart, status, origin, poste,
      comments, type, dispatched, arrived } = call;
      console.log("Call is: ", call, "id", id)
      console.log("Actions are: ", actions)
      return (
        <div>
        <StatusBar
        origin={origin}
        poste={poste}
        callStart={callStart}
        status={status} />

        <EmergencySelector callId={id} type={type} editType={actions.editType} />
        </div>
      )
    }

  }
