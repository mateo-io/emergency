import React from "react";
import H2 from 'components/H2';
import H3 from 'components/H3';
import Clock from './Clock';
import Text from 'components/Text';
import PaperBox from 'components/PaperBox';
import moment from 'moment';
import TextField from 'material-ui/TextField';
import MiniClock from './MiniClock';

const style = {
  "VIVO" : {borderColor: "red"},
  "COLGADA" : {borderColor: "green"},

  "INICIADO" : {borderColor: "blue"},
  "DESPACHADO" : {borderColor: "yellow"},
  "FINALIZADO" : {borderColor: "green"},
  "REABIERTO" : {borderColor: "purple", borderWidth: "12px"},
};


const MiniStatusBar = ({origin, posteInputChange, callDuration, callStatus, dispatched, arrived, callerNumber, callerId, poste, status, callStart, duration}) => (
  <div>
    <div className="row">
      <div className="col-sm-3">
         <PaperBox center zDepth={2} >
           <div>
                <TextField
                style={ {width: '120px', textAlign: 'right'} }
                hintText={"Numero poste"}
                onChange={posteInputChange}
                />
                <H3>{callerNumber}</H3>
                <Text> Origen </Text>
            </div>
        </PaperBox>
      </div>

      <div className="col-sm-3">
         <PaperBox  center style={ style[callStatus] } zDepth={2} >
        <H2>{callStatus}</H2>
        <MiniClock duration={callDuration} callStart={callStart}/>
        <Text >Estado Llamada</Text>
        </PaperBox>
      </div>

      <div className="col-sm-6">
         <PaperBox blank center zDepth={2} >

         {services}
        <H2>{status}</H2>

        <p>{status=='DESPACHADO' ?
        <div>{moment(dispatched).format('HH:mm')} (<MiniClock inline callStart={dispatched}/>)</div>:
         ''} </p>

        <p>{status=='FINALIZADO' ? <div>{moment(arrived).format('HH:mm')} (<MiniClock callStart={0} inline duration={(arrived-dispatched)/1000}/>)</div> : ''}</p>
        <Text plain>Estado Servicio</Text>
        </PaperBox>
      </div>


    </div>
  </div>
)

export default MiniStatusBar
