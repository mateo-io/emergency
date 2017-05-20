import React from "react";
import H2 from 'components/H2';
import Clock from './Clock';
import Text from 'components/Text';
import PaperBox from 'components/PaperBox';

const style = {
  "VIVO" : {borderColor: "green"},
  "ESPERA" : {borderColor: "red"},
  "FINALIZADO" : {borderColor: "blue"}
};


const StatusBar = ({origin, poste, status, callStart}) => (
  <div>
    <div className="row">
      <div className="col-md-4">
         <PaperBox center zDepth={2} >
           <div>
                <H2>{origin} - Poste {poste}</H2>
                <Text> Origen </Text>
            </div>
        </PaperBox>
      </div>

      <div className="col-md-3">
         <PaperBox  center style={ style[status] } zDepth={2} >
        <H2>{status}</H2>
        <Text>Estado</Text>
        </PaperBox>
      </div>


      <div className="col-md-4">
         <PaperBox center style={style} zDepth={2} >
        <Clock status={status} callStart={callStart} />
        <Text> Duración</Text>
        </PaperBox>
      </div>

    </div>
  </div>
)

export default StatusBar
