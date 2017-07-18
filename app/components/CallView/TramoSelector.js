import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    marginLeft: '70px',
    width: 250,
  },
};

export default class TramoSelector extends React.Component {
  constructor(){
    super()
    this.state = {
      value: 0,
      value2: 0,
      Segmentos: null
    }
  }

  handleAddSegments = (tramoId) => {
    fetch(`http://localhost:3000/api/tramos/segmentos?id=${tramoId}`)
      .then( res => res.json() )
      .then( res => {
        console.log("Segmentos from ", tramoId, " son ", res)
        this.setState({Segmentos: res.Segmentos});
        //this.props.actions.addSegments(res.Segmentos);
      })
      .catch( err => {
        console.log("Error fetching segments", err);
        this.setState({Segmentos: undefined});
      })
  }

  handleChange = (event, index, value) => {
    this.handleAddSegments(value);
    this.props.addTramo(this.props.callId, value, event.target.name);
    this.setState({value: value}) };

  handleChange2 = (event, index, value) => {
    console.log("EVENTTTTTT", event.target.value)
    this.props.addSegmento(this.props.callId, value, 'hola');
    this.setState({value2: value}) };

  render() {
    const { concesion } = this.props;
    console.log("CONCESION IS !!!!!", concesion)
    const { Tramos } = concesion;

    let TramosArray = [];
    let SegmentosArray = [];

    Tramos && Tramos.map((tramo) => {
        TramosArray.push(<MenuItem key={tramo.id} name={tramo.name} value={tramo.id} primaryText={tramo.name} />)
    })

    this.state.Segmentos && this.state.Segmentos.map((segmento) => {
        const { id, name, prInicial, prFinal } = segmento;
        SegmentosArray.push(<MenuItem key={id} value={id} name={name} primaryText={`${prInicial}-${prFinal} | ${segmento.name}`} />)
    })
    return(
      <div>
      <SelectField
        key={1}
        value={this.state.value}
        onChange={this.handleChange}
        style={styles.customWidth}
        >
        {TramosArray}
        </SelectField>

      <SelectField
        key={2}
        value={this.state.value2}
        onChange={this.handleChange2}
        style={styles.customWidth}
        >
        {SegmentosArray}
        </SelectField>
      </div>
    )
  }
}
