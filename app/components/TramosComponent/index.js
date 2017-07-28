import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import PropTypes from 'prop-types';
import { Link, Route, Redirect } from 'react-router-dom';
import SegmentoList from './SegmentoList';
import * as constants from 'constants/Colors';
import Title from 'components/Title';
import RaisedButton from 'material-ui/RaisedButton';
import NewTramo from './NewTramo/';
import NewSegment from './NewSegment/';

const style = {
  button: {
    marginLeft: '10px'
  },
  container: {
    margin: '20px'
  }
}

export default class TramosComponent extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleAddSegments = (tramoId) => {
    fetch(`http://localhost:3000/api/tramos/segmentos?id=${tramoId}`)
      .then( res => res.json() )
      .then( res => {
        console.log("Segmentos from ", tramoId, " son ", res)
        this.props.actions.addSegments(res.Segmentos);
      })
      .catch( err => {
        console.log("Error fetching segments", err)
        this.props.actions.addSegments([]);
      })
  }

  renderSegmentos = (props) => {
    return (
      <SegmentoList
        match ={this.props.match}
        segmentos={this.props.concesion.Segmentos}
        addSegmento={this.props.actions.addSegmento}
        updateSegmento={this.props.actions.updateSegmento}
        removeSegmento={this.props.actions.removeSegmentoFromArray}
        {...props}
      />
    )
  }

  render() {
    const { concesion, actions } = this.props;
    const { Tramos, Segmentos } = concesion;
    console.log("TramosComponent match: ", this.props.match);
    return (
      <div>
        <NewTramo
          concesionId={concesion.id}
          open={this.state.open}
          handleClose={() => this.setState({open: false})}
          addTramo={actions.addTramo} />

        <div style={{textAlign:'center', margin:'20px'}}>
          <h2>{concesion.name}</h2>
        </div>
        <div className="tramos" style={style.container}>
          <h2 style={{display:'inline-block'}}>Tramos</h2>

          <RaisedButton
            onClick={() => this.setState({open: true})}
            label="Nuevo Tramo"
            primary={true}
            style={style.button} />

        </div>

        <Tabs
        inkBarStyle={ {background: 'black', height: "4px"} }
        >

        {Tramos && Tramos.map((tramo) => {
          const { id, name } = tramo;
          return (
              <Tab
              containerElement={ <Link to={`/tramos/${tramo.id}`} /> }
              onClick={ () => this.handleAddSegments(tramo.id) }
              style={ {background: 'white',
              color: 'black' }}
              key={id}
              label={name}
            />
            )
          })
        } </Tabs>
        <Route path={`/tramos/:id`} component={this.renderSegmentos} />
        </div>
      )
    }
  }
