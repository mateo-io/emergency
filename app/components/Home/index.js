// @flow
import React, { Component } from 'react';
import H1 from 'components/H1';
import CallTabs from 'components/CallTabs';




export default class Home extends Component {
  render() {
    const { activeCalls, actions } = this.props;
    return (
      <div>
        <div data-tid="container">
          <CallTabs  calls={activeCalls} actions={actions}/>
          </div>
        </div>
    );
  }
}
