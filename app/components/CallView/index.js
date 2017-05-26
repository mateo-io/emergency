import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import PropTypes from 'prop-types';
import StatusBar from './StatusBar';
import EmergencySelector from './EmergencySelector';
import Divider from 'material-ui/Divider';
import CallComments from './CallComments';
import RaisedButton from 'material-ui/RaisedButton';


export default class CallView extends React.Component {

  updateDB = (data) => {
    const configuration = {
       "Accept":"application/json",
       "Content-Type": "application/json",
       "Access-Control-Allow-Origin":"*"
     }
    const payload = JSON.stringify(data)
    console.log("payload is ", payload)

    fetch('http://localhost:3000/api/calls', {
      method: 'POST',
      headers: configuration,
      body: payload
    }).then(function(response) {
      console.log("Sent data to the server")

    }).catch(function(err) {
      console.log("ERROR UPDATING CALL IN DB", err)
    });
  }


  completeCall = (evt) => {
    this.props.actions.completeCall(this.props.call.id)
    this.props.history.replace('/dashboard')
    this.updateDB(this.props.call)
  }

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
          status={status}
           />

          <Divider style={ {width: '100%'}} />

          <EmergencySelector
          callId={id}
          type={type}
          serviceDispatched={actions.updateDispatched}
          serviceArrived={actions.updateArrived}
          editType={actions.editType} />

          <CallComments
            callId={id}
            comments={comments}
            addComment={actions.addComment}
            />
          <RaisedButton label="Cerrar Servicio"
          backgroundColor={'red'}
          labelColor={'#f5f5f5'}
          style={ { display: 'block', width: '250px', margin: '12px auto'} }
          onClick={ this.completeCall}
          />


        </div>
      )
    }

  }
