import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import PropTypes from 'prop-types';
import { Link, Route, Redirect } from 'react-router-dom';
import Tramo from './Tramo';
import * as constants from 'constants/Colors';
import Title from 'components/Title';
import RaisedButton from 'material-ui/RaisedButton';
import newTramo from './newTramo/';
import newSegment from './newSegment/';

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

  renderTramo = (props) => {
    return (
      <Tramo
        segmentos={this.props.concesion.Segmentos}
        {...props}
      />
    )
  }
  render() {
    const { concesion, actions } = this.props;
    const { Tramos, Segmentos } = concesion;
    return (
      <div>
        <div style={{textAlign:'center', margin:'20px'}}>
          <h2>{concesion.name}</h2>
        </div>
        <div className="tramos" style={style.container}>
          <h2 style={{display:'inline-block'}}>Tramos</h2>
          <RaisedButton containerElement={<Link to="/tramos/new"/>} label="Nuevo Tramo" primary={true} style={style.button} />
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
        <Route path="/tramos/segment/new" component={newSegment} />
        <Route path={`/tramos/:id`} component={this.renderTramo} />
        <Route path="/tramos/new" component={newTramo} />
        </div>
      )
    }
  }
