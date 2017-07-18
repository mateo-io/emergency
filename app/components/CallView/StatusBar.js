import React from "react";
import H2 from 'components/H2';
import H3 from 'components/H3';
import Title from 'components/Title';
import Clock from './Clock';
import Text from 'components/Text';
import PaperBox from 'components/PaperBox';
import moment from 'moment';
import TextField from 'material-ui/TextField';
import MiniClock from './MiniClock';
import Paper from 'material-ui/Paper';
import Icons from 'components/Icons';
import TramoSelector from './TramoSelector';

//RADIO BUTTONS
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const style = {
  "VIVO" : {borderColor: "blue"},
  "COLGADA" : {borderColor: "green"},

  "INICIADO" : {borderColor: "blue"},
  "DESPACHADO" : {borderColor: "yellow"},
  "FINALIZADO" : {borderColor: "green"},
  "REABIERTO" : {borderColor: "purple", borderWidth: "12px"},
};


export default class StatusBar extends React.Component {

  render(){

    const {callId, addTramo, addSegmento, destino, concesion, updateDestino, handleAfterBefore, posteDistanceInputChange, origin, services,
      posteInputChange, callDuration, callStatus, dispatched1, type1, arrived1,
       callerNumber, callerId, poste, status, callStart, duration} = this.props;
    let servicesArray = [];

    const servicesJson = {
      1 : {
        type: type1,
        dispatched: dispatched1,
        arrived: arrived1
      },
      2 : {
        type: this.props.type2,
        dispatched: this.props.dispatched2,
        arrived: this.props.arrived2
      },
      3 : {
        type: this.props.type3,
        dispatched: this.props.dispatched3,
        arrived: this.props.arrived3
      },
      4 : {
        type: this.props.type4,
        dispatched: this.props.dispatched4,
        arrived: this.props.arrived4
      }

    }

    for(let i=1; i<=services; i++){
      let {type, dispatched, arrived} = servicesJson[i];

        if(arrived) {
          servicesArray.push(
            <Paper style={{height: '35px', borderLeft: '10px solid green'}}>
            <p>
            <div><Icons type={type} />{moment(arrived).format('HH:mm')} (<MiniClock callStart={0} inline duration={(arrived-dispatched)/1000}/>)</div>
            </p>
            </Paper>
          )
        } else if(dispatched) {
            servicesArray.push(
            <Paper style={{height: '35px', borderLeft: '10px solid yellow'}}>
          <p>
          <div><Icons type={type} />{moment(dispatched).format('HH:mm')} (<MiniClock inline callStart={dispatched}/>)</div></p>
          </Paper>

            )
        } else {
          servicesArray.push(
            <div><Icons type={type} />Esperando despacho</div>
          )
        }

      }




    return(
  <div>
    <div className="row">
      <div className="col-sm-5">


         <PaperBox zDepth={2} >

           <div className="row">
            <div className="col-sm-4">

                <TextField
                style={ {width: '40px', height: '40px', margin: '0 15px', display: 'inline-block'} }
                hintStyle={{fontSize: '12px', size: '12px'}}
                hintText={"# poste"}
                onChange={posteInputChange}
                />
                <span style={{fontSize:'20px', display: 'inline-block'}}>|   {callerNumber.poste}</span>
                </div>

                <div style={{textAlign:'center', height: '20px'}} className="col-sm-6">

                <Text small plain>Tramo</Text>
                <TramoSelector callId={callId} concesion={concesion} addTramo={addTramo} addSegmento={addSegmento} />
                {
                  callerNumber.lugar1 ?
               <div>
                 <span value={callerNumber.lugar1} onClick={updateDestino}>
                 {callerNumber.lugar1===destino ?
                     <H3>{callerNumber.lugar1}</H3>
                     : callerNumber.lugar1}
                 </span>
                  {destino===callerNumber.lugar1 ? ' <--- ' : ''}
                  {destino===callerNumber.lugar2 ? ' ---> ' : ''}
                  {destino==undefined && '<-->'}

                 <span value={callerNumber.lugar2} onClick={updateDestino}>
                 {callerNumber.lugar2===destino ?
                     <H3>{callerNumber.lugar2}</H3>
                     : callerNumber.lugar2}
                 </span>
               </div>
               :
                <div>
               </div>
             }
                </div>


           </div>


           <div className="row" style={{marginTop: '20px'}}>
               <div className="col-sm-3">
               <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                 <RadioButton
                 value="antes"
                 label="Antes"
                 onClick={handleAfterBefore}
                 style={ {display: 'inline-block'}}
                 />

                 <RadioButton
                 value="despues"
                 label="Despues"
                 onClick={handleAfterBefore}
                 style={{display: 'inline-block'}}
                 />
               </RadioButtonGroup>
           </div>

            <div className="col-sm-3">
                <TextField
                style={ {width: '100px', height: '40px', marginLeft: '10px', display: 'inline-block'} }
                hintStyle={{fontSize: '12px', size: '12px'}}
                hintText={"ej. 300 mt"}
                onChange={posteDistanceInputChange}
                />
                <Text block small plain>Distancia del poste</Text>
            </div>

                <div style={{marginLeft: '-45px', textAlign:'center', height: '20px'}} className="col-sm-4">
                <Text small plain>Segmento</Text>
             </div>

            </div>


        </PaperBox>
      </div>

      <div className="col-sm-2">
         <PaperBox  center style={ style[callStatus] } zDepth={2} >
        <H2>{callStatus}</H2>
        <MiniClock duration={callDuration} callStart={callStart}/>
        <Text>Estado Llamada</Text>
        </PaperBox>
      </div>

      <div className="col-sm-4">
         { services ?
         <PaperBox blank center style={ style[status] } zDepth={2} >
           {servicesArray}
        </PaperBox>
        :
         <PaperBox center style={ style[status] } zDepth={2} >
        <H2>{status}</H2>

        <p>{status=='DESPACHADO' ?
        <div>{moment(dispatched1).format('HH:mm')} (<MiniClock inline callStart={dispatched1}/>)</div>:
         ''} </p>

        <p>{status=='FINALIZADO' ? <div>{moment(arrived1).format('HH:mm')} (<MiniClock callStart={0} inline duration={(arrived1-dispatched1)/1000}/>)</div> : ''}</p>
        <Text plain>Estado Servicio</Text>
        </PaperBox>


         }
      </div>


    </div>
  </div>

    )
  }

}
