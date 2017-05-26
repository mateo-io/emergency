import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import HeaderLink from './HeaderLink';
import Profile from './Profile';
import H2 from 'components/H2';
//SOCKET
const io = require('socket.io-client')
const socket = io.connect('http://localhost:9000')


export default class HeaderComponent extends React.Component {

    constructor(props) {
      super(props);

      socket.on('connected', function(data) {
        console.log("ready for data");
        socket.emit('ready for data', {});
      });

      socket.on('update', function(data) {
        console.log("Call added dude")
        this.props.actions.addCall()
      }.bind(this))

      socket.on('insert', function(data) {
        console.log("Data inserted into db");
        console.log("PROPS: ", this.props)
        const id = this.props.activeCalls[this.props.activeCalls.length-1].id
        console.log("Active call id is: ", id);
        this.props.actions.addPhoneInfo(id, data);
      }.bind(this))
    }
    
    componentDidMount(){
      this.props.searchActions.fetchCalls();
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
