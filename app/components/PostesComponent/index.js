import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import PropTypes from 'prop-types';
import { Link, Route, Redirect } from 'react-router-dom';
import Tramo from './Tramo';
import * as constants from 'constants/Colors';
import Title from 'components/Title';
import RaisedButton from 'material-ui/RaisedButton';
import Poste from './Poste';

const style = {
  button: {
    marginLeft: '10px'
  },
  container: {
    margin: '20px'
  }
}

export default class PostesComponent extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }


  renderTramo = (props) => {
    return (
      <Tramo
        postes={[]}
        match={this.props.match}
        {...props}
      />
    )
  }



  render() {
    const { concesionName, tramos, actions } = this.props;

    console.log("TramosComponent match: ", this.props.match);
    return (
      <div>

        <div style={{textAlign:'center', margin:'20px'}}>
          <h2>{concesionName}</h2>
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

        {tramos && tramos.map((tramo) => {
          const { id, name } = tramo;
          return (
              <Tab
              containerElement={ <Link to={`/postes/${tramo.id}`} /> }
              onClick={ () => console.log("ola desde PosteComponent") }
              style={ {background: 'white',
              color: 'black' }}
              key={id}
              label={name}
            />
            )
          })
        } </Tabs>
        <Route path={`/postes/:id`} component={this.renderTramo} />
        </div>
      )
    }
  }
