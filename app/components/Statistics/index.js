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
    let informativaCount = 0;


    let servicesCount = {
      "AMBULANCIA" : 0,
      "GRUA" : 0,
      "POLICIA" : 0,
      "CARROTALLER" : 0,
      "BOMBEROS" : 0,
      "BLOQUEOS" : 0,
      "OTRO" : 0
    };

    calls.map((call) => {
      if (call.type==='INFORMATIVA') {
       informativaCount+=1;
      }
      servicesCount[call.type] += 1;
      servicesCount[call.type2] += 1;
      servicesCount[call.type3] += 1;
      servicesCount[call.type4] += 1;
    })

    const maxTypeObject = this.getMaxOfArray(servicesCount);
    const { maxType, maxTypeValue } = maxTypeObject;

    const style = {
      "AMBULANCIA" : {
        borderColor: 'red'
      },
      "GRUA" : {
        borderColor: 'yellow'
      },
      "BOMBEROS" : {
        borderColor: 'red'
      },
      "OTRO" : {
        borderColor: 'orange'
      },
      "CARROTALLER" : {
        borderColor: 'gray'
      },
      "POLICIA" : {
        borderColor: 'blue'
      },
      "BLOQUEOS" : {
        borderColor: 'red'
      },
      "row" : {
        paddingTop: '30px',
        paddingLeft: '30%',
        margin: '0 auto',
        textAlign: 'center'
      }
    }


    console.log(servicesCount);
    return(
      <div>
          <FilterBar searchActions={searchActions} callActions={callActions} />
        <Wrapper>

          <div style={{textAlign: 'center'}}>
            <h1>Estadisticas</h1>
          </div>

          <div className="informacion_llamadas row" style={style.row}>


            <div className="col-sm-3">
              <PaperBox center blank>
                <H1 paddingTop>{calls.length}</H1>
                <Text bottom>LLAMADAS TOTALES</Text>
              </PaperBox>
            </div>

            <div className="col-sm-3">
              <PaperBox blank>
                <H1 paddingTop>{calls.length-informativaCount}</H1>
                <Text bottom>LLAMADAS SERVICIOS</Text>
              </PaperBox>
            </div>


            <div className="col-sm-3">
              <PaperBox blank>
                <H1 paddingTop>{informativaCount}</H1>
                <Text bottom>LLAMADAS INFORMATIVAS</Text>
              </PaperBox>
            </div>

            <div className="col-sm-2"></div>
          </div>

          <div className="row sericios_fila_1" style={style.row}>

            <div className="col-sm-3">
              <PaperBox style={style.AMBULANCIA}>
                <H1 paddingTop>{servicesCount.AMBULANCIA}</H1>
                <Text bottom>AMBULANCIA</Text>
              </PaperBox>
            </div>

            <div className="col-sm-3">
              <PaperBox style={style.GRUA}>
                <H1 paddingTop>{servicesCount.GRUA}</H1>
                <Text bottom>GRUA</Text>
              </PaperBox>
            </div>

            <div className="col-sm-3">
              <PaperBox style={style.BOMBEROS}>
                <H1 paddingTop>{servicesCount.BOMBEROS}</H1>
                <Text bottom>BOMBEROS</Text>
              </PaperBox>
            </div>

          </div>


          <div className="row servicos_fila_2" style={style.row}>

            <div className="col-sm-3">
              <PaperBox style={style.OTRO}>
                <H1 paddingTop>{servicesCount.OTRO}</H1>
                <Text bottom>OTRO</Text>
              </PaperBox>
            </div>

            <div className="col-sm-3">
              <PaperBox style={style.CARROTALLER}>
                <H1 paddingTop>{servicesCount.CARROTALLER}</H1>
                <Text bottom>CARROTALLER</Text>
              </PaperBox>
            </div>

            <div className="col-sm-3">
              <PaperBox>
                <H1 paddingTop>{servicesCount.BLOQUEOS}</H1>
                <Text bottom>BLOQUEOS</Text>
              </PaperBox>
            </div>


          </div>




          <div className="row estadisticas_extras_servicios" style={style.row}>
            <div className="col-md-4">
              <PaperBox>
                <H1 paddingTop>{maxType}: {maxTypeValue}</H1>
                <Text bottom>SERVICIO MÁS PEDIDO</Text>
              </PaperBox>
            </div>


          </div>
      </Wrapper>
      </div>
    )
  }
}
