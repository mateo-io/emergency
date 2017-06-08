import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import PropTypes from 'prop-types';
import StatusBar from './StatusBar';
import EmergencySelector from './EmergencySelector';
import Divider from 'material-ui/Divider';
import CallComments from './CallComments';
import RaisedButton from 'material-ui/RaisedButton';
import AlertDialog from 'components/AlertDialog';
import getPoste from 'helpers/getPoste';
import { updateDB, updateCallDB} from 'helpers/api';


export default class CallView extends React.Component {


  cancelCall = (evt) => {

  }

  completeCall = (evt) => {
    if(this.props.call.status == "FINALIZADO" && this.props.call.callStatus == "COLGADA"){
      this.props.actions.completeCall(this.props.call.id)
      this.props.history.replace('/')
      if(this.props.call.status!=='REABIERTO'){
        updateDB(this.props.call)
      } else {
        console.log("I'm updating")
          updateCallDB(this.props.call)

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
    const { id, callStart, callDuration, callStatus, status, origin, poste,
      comments, type, callerNumber, dispatched, arrived, duration, callerId } = call;

    const posteInputChange = (evt) => {
      actions.addUserPoste(id, evt.target.value);
    }

      console.log("CallView -> call is: ", call)


      return (
        <div>
          <StatusBar
          posteInputChange={posteInputChange}
          callDuration={callDuration}
          callStatus={callStatus}
          origin={origin}
          poste={poste}
          callStart={callStart}
          callerNumber={getPoste(callerNumber)}
          dispatched={dispatched}
          arrived={arrived}
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
