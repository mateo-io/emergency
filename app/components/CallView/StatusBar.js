import React from "react";
import H2 from 'components/H2';
import H3 from 'components/H3';
import Clock from './Clock';
import Text from 'components/Text';
import PaperBox from 'components/PaperBox';

const style = {
  "VIVO" : {borderColor: "red"},
  "COLGADA" : {borderColor: "green"},

  "INICIADO" : {borderColor: "blue"},
  "DESPACHADO" : {borderColor: "yellow"},
  "FINALIZADO" : {borderColor: "green"},
  "REABIERTO" : {borderColor: "purple", borderWidth: "12px"},
};


const StatusBar = ({origin, callStatus, callerId, poste, status, callStart, duration}) => (
  <div>
    <div className="row">
      <div className="col-sm-3">
         <PaperBox center zDepth={2} >
           <div>
                <H3>{callerId ? callerId : 'NA callerId'}</H3>
                <H3>{poste ? poste : 'NA poste'}</H3>
                <Text> Origen </Text>
            </div>
        </PaperBox>
      </div>

      <div className="col-sm-3">
         <PaperBox  center style={ style[callStatus] } zDepth={2} >
        <H2>{callStatus}</H2>
        <Text>Estado Llamada</Text>
        </PaperBox>
      </div>

      <div className="col-sm-3">
         <PaperBox  center style={ style[status] } zDepth={2} >
        <H2>{status}</H2>
        <Text>Estado Servicio</Text>
        </PaperBox>
      </div>

      <div className="col-sm-3">
         <PaperBox center style={style} zDepth={2} >
        <Clock callStart={callStart} duration={duration} />
        <Text> Duración</Text>
        </PaperBox>
      </div>

    </div>
  </div>
)

export default StatusBar
