// @flow
import React, { Component } from 'react';
import H1 from 'components/H1';
import CallTabs from 'components/CallTabs';
import { Redirect } from 'react-router-dom';




export default class Home extends Component {

    componentWillReceiveProps(nextProps) {
      if (nextProps.activeCalls[0]) {
        this.props.history.push(`/dashboard/call/${nextProps.activeCalls[0].id}`);
        console.log("TRIED TO REDIRECT")
      }
    }

  render() {
    const { activeCalls, actions } = this.props;
    let calls = activeCalls;
    console.log("call props!!!!!!!!!!!!!!!!!!!!!!!!!!", this.props);

    return (
      <div>
        <div data-tid="container">
          <CallTabs  calls={activeCalls} actions={actions}/>

        {calls[0] ?
          <div>
            <Redirect to={`/dashboard/call/${calls[0].id}`} />
          </div>
          : <div style={{ textAlign: 'center' }}>
            <h1>No hay llamadas activas</h1>
          </div>
        }

        </div>
      </div>
    );
  }
}
