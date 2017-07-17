import React from 'react';
import Segmento from 'components/Segmento';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
  paper : {
    height: 'auto',
    margin: '10px 20px'
  },
  button: {
    margin: '10px',
    display: 'inline-block'
  },
  header: {
    display: 'inline-block'
  }
}

export default class Tramo extends React.Component {
  constructor(){
    super()
  }
  componentWillMount() {
    return;
    const tramoId = this.props.match.params['id'];
    fetch(`http://localhost:3000/api/tramos/segmentos?id=${tramoId}`)
      .then( res => res.json() )
      .then( res => console.log("Segmentos from ", tramoId, " son ", res))
      .catch( err => console.log('Error fetching segments'))
  }


  render() {
    let { segmentos } = this.props;
    console.log("Tramo props", this.props);
    return(
      <div style={style.paper}>
        <h2 style={style.header}>Segmentos</h2>
        <RaisedButton label="Nuevo Segmento" secondary={true} style={style.button} />
        <div className="segmentos">
          {segmentos && segmentos.map((segmento) => {
            const { id, name, prInicial, prFinal } = segmento;
            return(
              <Segmento key={id} name={name} prInicial={prInicial} prFinal={prFinal} />
            )

          })}
      </div>
    </div>
    )

  }
}
