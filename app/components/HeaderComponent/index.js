import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import HeaderLink from './HeaderLink';
import Profile from './Profile';

export default class HeaderComponent extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      const { activeCalls, actions } = this.props;

      return(
        <Navbar>
          <HeaderLink to="/">
            SERVICIOS ABIERTOS: {activeCalls.length}
          </HeaderLink>

          <HeaderLink to="/filters">
            FILTROS
          </HeaderLink>

          <HeaderLink to="/map">
            MAPA
          </HeaderLink>

          <HeaderLink to="#">
            MATEO MEJIA
          </HeaderLink>
        </Navbar>
      )
    }
  }
