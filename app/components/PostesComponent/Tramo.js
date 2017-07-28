import React from 'react';
import Segmento from 'components/Segmento';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Link, Route } from 'react-router-dom';
import Poste from './Poste';
import PosteNavbar from './PosteNavbar';


const style = {
  paper : {
    height: 'auto',
    margin: '10px 20px'
  },
  button: {
    marginLeft: '10px',
    display: 'inline-block'
  },
  header: {
    display: 'inline-block'
  }
}

export default class Tramo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  /*
  componentWillMount() {
    const tramoId = this.props.match.params['id'];
    console.log("Tramo is is ", tramoId);
    fetch(`http://localhost:3000/api/tramos/segmentos?id=${tramoId}`)
      .then( res => res.json() )
      .then( res => console.log("Segmentos from ", tramoId, " son ", res))
      .catch( err => console.log('Error fetching segments'))
  }
  */




  render() {
    let { postes } = this.props;
    const tramoId = this.props.match.params['id'];
    console.log("Tramo props", this.props);
    return(
      <div style={style.paper}>

        <PosteNavbar />
        <RaisedButton onClick={() => this.setState({open: true})}  label="Nuevo Segmento" secondary={true} style={style.button} />
        <div className="postes">
          {postes && postes.map((poste) => {
            return(
              <Poste />
            )

          })}
    </div>
  </div>
    )

  }
}
