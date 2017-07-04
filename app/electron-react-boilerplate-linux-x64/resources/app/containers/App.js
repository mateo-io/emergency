// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import Header from 'containers/Header';

export default class App extends Component {
  props: {
    children: Children
  };

  render() {
    return (
      <div>
        <Header />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
