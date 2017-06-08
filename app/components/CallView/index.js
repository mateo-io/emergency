import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import PropTypes from 'prop-types';
import StatusBar from './StatusBar';
import EmergencySelector from './EmergencySelector';
import SmallEmergency from './SmallEmergency';
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
    if(this.props.call.dispatched && !this.props.call.arrived) { alert('Servicio 1 no completado'); return}
    if(this.props.call.dispatched2 && !this.props.call.arrived2) { alert('Servicio 2 no completado'); return}
    if(this.props.call.dispatched3 && !this.props.call.arrived3) { alert('Servicio 3 no completado'); return}
    if(this.props.call.dispatched4 && !this.props.call.arrived4) { alert('Servicio 4 no completado'); return}

    if(this.props.call.callStatus!=="COLGADA") { alert(`Llamada en estado: ${this.props.call.callStatus} `); return}

    if(this.props.call.dispatched && this.props.call.type) {
      this.props.actions.completeCall(this.props.call.id)
      this.props.history.replace('/')

      if(this.props.call.status!=='REABIERTO'){
        updateDB(this.props.call)
      } else {
        console.log("I'm updating")
        updateCallDB(this.props.call)

      }

    } else {
      alert("No se puede guardar : Error")
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
    const { id, callStart, services, callDuration, callStatus, status, origin, poste,
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
          status={status}
          services={services}
          duration={duration}
          callerId={callerId}
          type1={type}
          type2={this.props.call.type2}
          type3={this.props.call.type3}
          type4={this.props.call.type4}
          dispatched1={dispatched}
          dispatched2={this.props.call.dispatched2}
          dispatched3={this.props.call.dispatched3}
          dispatched4={this.props.call.dispatched4}
          arrived1={arrived}
          arrived2={this.props.call.arrived2}
          arrived3={this.props.call.arrived3}
          arrived4={this.props.call.arrived4}
           />


          {services ?
          <SmallEmergency
          addService={actions.addService}
          services={services}
          callId={id}
          type={type}
          type2={this.props.call.type2}
          type3={this.props.call.type3}
          type4={this.props.call.type4}
          dispatched1={dispatched}
          dispatched2={this.props.call.dispatched2}
          dispatched3={this.props.call.dispatched3}
          dispatched4={this.props.call.dispatched4}
          arrived1={arrived}
          arrived2={this.props.call.arrived2}
          arrived3={this.props.call.arrived3}
          arrived4={this.props.call.arrived4}
          serviceDispatched={actions.updateDispatched}
          serviceDispatched2={actions.updateDispatched2}
          serviceDispatched3={actions.updateDispatched3}
          serviceDispatched4={actions.updateDispatched4}
          serviceArrived={actions.updateArrived}
          serviceArrived2={actions.updateArrived2}
          serviceArrived3={actions.updateArrived3}
          serviceArrived4={actions.updateArrived4}
          editType={actions.editType}
          editType2={actions.editType2}
          editType3={actions.editType3}
          editType4={actions.editType4}
          />
          :
          <EmergencySelector
          addService={actions.addService}
          callId={id}
          type={type}
          dispatched={dispatched}
          arrived={arrived}
          serviceDispatched={actions.updateDispatched}
          serviceArrived={actions.updateArrived}
          editType={actions.editType} />
          }


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
