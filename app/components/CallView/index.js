import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import PropTypes from 'prop-types';
import StatusBar from './StatusBar';
import EmergencySelector from './EmergencySelector';
import Divider from 'material-ui/Divider';
import CallComments from './CallComments';
import RaisedButton from 'material-ui/RaisedButton';
import AlertDialog from 'components/AlertDialog';


export default class CallView extends React.Component {

  updateDB = (data) => {
    const configuration = {
       "Accept":"application/json",
       "Content-Type": "application/json",
       "Access-Control-Allow-Origin":"*"
     }
     const data2 = data;
     data2['open'] = false;
    const payload = JSON.stringify(data2)
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

  updateCallDB = (data) => {
    const configuration = {
       "Accept":"application/json",
       "Content-Type": "application/json",
       "Access-Control-Allow-Origin":"*"
     }
     const data2 = data;
     data2['open'] = false;
    const payload = JSON.stringify(data2)
    console.log("payload is ", payload)
    const id = data.id;
    console.log("ID IN UPDATE IS ", id)

    fetch(`http://localhost:3000/api/calls/${id}`, {
      method: 'PUT',
      headers: configuration,
      body: payload
    }).then(function(response) {
      console.log("Sent update data to the server")

    }).catch(function(err) {
      console.log("ERROR UPDATING CALL IN DB", err)
    });
  }

  cancelCall = (evt) => {

  }

  completeCall = (evt) => {
    if(this.props.call.status == "FINALIZADO" && this.props.call.callStatus == "COLGADA"){
      this.props.actions.completeCall(this.props.call.id)
      this.props.history.replace('/')
      if(this.props.call.status!=='REABIERTO'){
        this.updateDB(this.props.call)
      } else {
        console.log("I'm updating")
        this.updateCallDB(this.props.call)

      }

    } else {
      alert('Llamada no finalizada');
    }
  }

          /*
          TODO: Cancelar llamada...servicio
          <RaisedButton label="Cancelar Servicio"
          backgroundColor={'red'}
          labelColor={'#f5f5f5'}
          style={ { display: 'block', width: '250px'} }
          onClick={ this.cancelCall }
          />
          */


  render() {
    const { call, actions } = this.props;
    const { id, callStart, callStatus, status, origin, poste,
      comments, type, dispatched, arrived, duration, callerId } = call;

      console.log("Call is: ", call, "id", id)
      console.log("Actions are: ", actions)


      return (
        <div>
          <StatusBar
          callStatus={callStatus}
          origin={origin}
          poste={poste}
          callStart={callStart}
          status={status}
          duration={duration}
          callerId={callerId}
           />


          <EmergencySelector
          callId={id}
          type={type}
          dispatched={dispatched}
          arrived={arrived}
          serviceDispatched={actions.updateDispatched}
          serviceArrived={actions.updateArrived}
          editType={actions.editType} />

          <CallComments
            callId={id}
            comments={comments}
            addComment={actions.addComment}
            />
          <RaisedButton label="Finalizar Servicio"
          backgroundColor={'green'}
          labelColor={'#f5f5f5'}
          style={ { display: 'block', width: '250px', margin: '12px auto'} }
          onClick={ this.completeCall}
          />


        </div>
      )
    }

  }
