import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import HeaderLink from './HeaderLink';
import Profile from './Profile';
import H2 from 'components/H2';

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
          <a href="#" onClick={ actions.addCall}>ADD CALL</a>
        </Navbar>
      )
    }
  }
