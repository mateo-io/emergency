import React from 'react';
import FilterBar from 'components/FilterBar';
import PaperBox from 'components/PaperBox';
import H1 from 'components/H1';
import H3 from 'components/H3';
import Title from 'components/Title';
import Text from 'components/Text';
import Wrapper from './Wrapper'

export default class Statistics extends React.Component {


  getMaxOfArray = (calls) => {
    let maxNumber = 0;
    let maxIndex = '';
    Object.entries(calls).map(([type, value]) => {
      console.log("Running getMax of array");
      console.log("Type: ", type, "value: ", value, "max: ", maxNumber);
      if (value > maxNumber) {
        maxNumber = value;
        maxIndex = type;
      }
    });
    return { maxType: maxIndex, maxTypeValue: maxNumber }
  }


  render() {
    const { calls, searchActions, callActions } = this.props;

    // Get counter for different services
    let servicesCount = {
      "AMBULANCIA" : 0,
      "GRUA" : 0,
      "POLICIA" : 0,
      "CARROTALLER" : 0,
      "BOMBEROS" : 0,
      "OTRO" : 0,
      "INFORMATIVA" : 0
    };

    calls.map((call) => {
      servicesCount[call.type] += 1;
      servicesCount[call.type2] += 1;
      servicesCount[call.type3] += 1;
      servicesCount[call.type4] += 1;
    })

    const maxTypeObject = this.getMaxOfArray(servicesCount);
    const { maxType, maxTypeValue } = maxTypeObject;



    console.log(servicesCount);
    return(
      <div>
          <FilterBar searchActions={searchActions} callActions={callActions} />
        <Wrapper>

          <div style={{textAlign: 'center'}}>
            <h1>Estadisticas</h1>
          </div>

          <div className="informacion_llamadas row" style={{margin: '0 auto', padding: '30px'}}>

            <div className="col-md-3">
              <PaperBox center blank>
                <H1>{calls.length}</H1>
                <Text>Llamadas Totales</Text>
              </PaperBox>
            </div>

            <div className="col-md-3">
              <PaperBox blank>
                <H1>{calls.length-servicesCount.INFORMATIVA}</H1>
                <Text>Llamadas Servicios</Text>
              </PaperBox>
            </div>


            <div className="col-md-3">
              <PaperBox blank>
                <H1>{servicesCount.INFORMATIVA}</H1>
                <Text>Llamadas Informativas</Text>
              </PaperBox>
            </div>

          </div>

          <div className="row">

            <div className="col-sm-3">
              <PaperBox>
                <h4>AMBULANCIA</h4>
                <Text>{servicesCount.AMBULANCIA}</Text>
              </PaperBox>
            </div>

            <div className="col-sm-3">
              <PaperBox>
                <h4>GRUA</h4>
                <Text>{servicesCount.GRUA}</Text>
              </PaperBox>
            </div>
            <div className="col-sm-3">
              <PaperBox>
                <h4>BOMBEROS</h4>
                <Text>{servicesCount.BOMBEROS}</Text>
              </PaperBox>
            </div>
            <div className="col-sm-3">
              <PaperBox>
                <h4>OTRO</h4>
                <Text>{servicesCount.OTRO}</Text>
              </PaperBox>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <PaperBox>
                <h4>CARROTALLER</h4>
                <Text>{servicesCount.CARROTALLER}</Text>
              </PaperBox>
            </div>

            <div className="col-md-3">
              <PaperBox>
                <h4>POR COMPLETAR</h4>
                <Text>{servicesCount.AMBULANCIA}</Text>
              </PaperBox>
            </div>

          </div>

          <div className="row">
            <div className="col-md-4">
              <PaperBox>
                <h4>Servicio mas pedido</h4>
                {maxType} : {maxTypeValue}
              </PaperBox>
            </div>


          </div>
      </Wrapper>
      </div>
    )
  }
}
