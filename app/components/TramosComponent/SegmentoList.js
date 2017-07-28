import React from 'react';
import Segmento from 'components/Segmento';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Link, Route } from 'react-router-dom';
import NewSegment from './NewSegment/';
import AlertDelete from 'components/AlertDelete';
import EditSegmento from './EditSegmento';


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
  } }

export default class SegmentoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      openAlert: false,
      editModalOpen: false,
      curtrentSegmento: {}
    }
  }

  componentWillMount() {
    const tramoId = this.props.match.params['id'];
    console.log("Tramo is is ", tramoId);
    fetch(`http://localhost:3000/api/tramos/segmentos?id=${tramoId}`)
      .then( res => res.json() )
      .then( res => console.log("Segmentos from ", tramoId, " son ", res))
      .catch( err => console.log('Error fetching segments'))
  }


  reallyDestroySegmento = (evt) => {
    if(this.state.currentSegmento) {
      console.log("reallyDestroyingSegmento", this.state.currentSegmento, evt);

      let id = this.state.currentSegmento.id;

    const data = JSON.stringify(
      {
        "id": id
    }
  );
  const configuration = new Headers({
    "Accept":"application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin":"*"
  })

  fetch("http://localhost:3000/api/segmento/destroy", {
    method: "POST",
    headers: configuration,
    body: data
  })
  .then(res => res.json())
  .then((value) => {
    this.setState({openAlert: false});
    this.props.removeSegmento(id);
    return {message: value};
  })
  .catch((res) => {
    console.log("Values sent", data);
    console.log("ERROR!", res);
  })

    } else {
      console.log("DestroySegmento. Current segmento is none");
    }
  }



cancelDestroy = () => {
  this.setState({openAlert: false});
}


  handleClickUpdate = (evt) => {
    console.log("This evt traget", evt.target);
    console.log("This evt value", evt.target.value);
    const segmentoId = evt.target.value;
    this.setState({
        currentSegmento: this.props.segmentos.filter((seg) => seg.id == segmentoId)[0],
        editModalOpen: true
      })
}

  handleClickDestroy = (evt) => {
    console.log("Handle click destroy called");
    const segmentoId = evt.target.value;
    this.setState({
        currentSegmento: this.props.segmentos.filter((seg) => seg.id == segmentoId)[0],
        openAlert: true
      })
  }


  render() {
    let { segmentos } = this.props;
    const tramoId = this.props.match.params['id'];
    console.log("Tramo props", this.props);
    return(
      <div style={style.paper}>

      <AlertDelete
        tipo='segmento'
        reallyDestroy={this.reallyDestroySegmento}
        cancelDestroy={this.cancelDestroy}
        open={this.state.openAlert}
      />


      <EditSegmento
        open={this.state.editModalOpen}
        handleClose={() => this.setState({editModalOpen: false})}
        updateSegmento={this.props.updateSegmento}
        segmento={this.state.currentSegmento}
      />


        <NewSegment
          tramoId={tramoId}
          open={this.state.open}
          handleClose={() => this.setState({open: false})}
          addSegmento={this.props.addSegmento} />

        <h2 style={style.header}>Segmentos</h2>
        <RaisedButton onClick={() => this.setState({open: true})}  label="Nuevo Segmento" secondary={true} style={style.button} />
        <div className="segmentos">
          {segmentos && segmentos.map((segmento) => {
            const { id, name, prInicial, prFinal } = segmento;
            return(
              <Segmento
                key={id}
                id={id}
                name={name}
                onClickUpdate={this.handleClickUpdate}
                onClickDestroy={this.handleClickDestroy}
                prInicial={prInicial}
                prFinal={prFinal} />
            )

          })}
      </div>
    </div>
    )

  }
}
