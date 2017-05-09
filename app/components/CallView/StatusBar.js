import React from "react";
import H2 from 'components/H2';
import Clock from './Clock';
import Status from './Status';
import Text from 'components/Text';
import PaperBox from 'components/PaperBox';

const style = {
  "VIVO" : {borderColor: "green"},
  "ESPERA" : {borderColor: "red"},
  "COLA" : {borderColor: "blue"}
};


const StatusBar = ({origin, poste, status}) => (
  <div>
    <div className="row">
      <div className="col-md-4">
         <PaperBox zDepth={2} >
           <div>
                <H2>{origin} - Poste {poste}</H2>
                <Text> Origen </Text>
            </div>
        </PaperBox>
      </div>

      <div className="col-md-3">
         <PaperBox style={ style[status] } zDepth={2} >
        <H2>{status}</H2>
        <Text>Estado</Text>
        </PaperBox>
      </div>


      <div className="col-md-4">
         <PaperBox style={style} zDepth={2} >
        <Clock />
        <Text> Duración</Text>
        </PaperBox>
      </div>

    </div>
  </div>
)

export default StatusBar
