// @flow
import React, { Component } from 'react';
import H1 from 'components/H1';
import CallTabs from 'components/CallTabs';
import { Redirect } from 'react-router-dom';




export default class Home extends Component {
  render() {
    const { activeCalls, actions } = this.props;
    let calls = activeCalls;
    console.log("call props!!!!!!!!!!!!!!!!!!!!!!!!!!", this.props);
    return (
      <div>
        <div data-tid="container">
          <CallTabs  calls={activeCalls} actions={actions}/>
        { calls[0] ?
          <div>
            <h4>hola</h4>
            <Redirect to={`/dashboard/call/${calls[0].id}`} />
          </div>
          : <div style={ {textAlign: 'center'} }>
            <h1>No hay llamadas activas</h1>
          </div>}
          </div>
        </div>
    );
  }
}
