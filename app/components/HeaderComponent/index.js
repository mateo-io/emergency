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
      this.state = {
        connected: false,
        fetchFailed: false
      }



      socket.on('connected', function(data) {
        console.log("ready for data");
        socket.emit('ready for data', {});
        this.setState({connected: true})
      }.bind(this));

      socket.on('disconnect', function() {
        this.setState({connected: false})
        alert('Se ha desconectado de la red');
      }.bind(this))

      socket.on('update', function(data) {
        console.log("Call added dude")
        this.props.actions.addCall()
      }.bind(this))

      socket.on('insert', function(data) {
        console.log("Data inserted into db");
        const liveCalls = this.props.activeCalls
        .filter( (call) => {
          return !call.uniqueid
        })
        const id = liveCalls[liveCalls.length-1].id
        console.log("Active call id is: ", id);
        this.props.actions.addPhoneInfo(id, data);
      }.bind(this))
    }

    reconnect = () => {
        this.props.searchActions.fetchCalls()
        .then( () => {
          this.setState({fetchFailed: false, connected: true})
        }).catch( (e) => {
        this.setState({fetchFailed: true, connected: false})
        })
    }


    componentDidMount(){
      try {
        this.props.searchActions.fetchCalls()
        this.setState({fetchFailed: false})
      } catch(e) {
        this.setState({fetchFailed: true})
      }
    }


    render() {
      const { activeCalls, actions } = this.props;

      return(
        <Navbar>
          <HeaderLink to="/">
            {activeCalls.length} - LLAMADAS ACTIVAS
          </HeaderLink>

          <HeaderLink to="/table">
            LISTA DE LLAMADAS
          </HeaderLink>


          <HeaderLink to="/login">
            LOGIN
          </HeaderLink>

          <button href="#" onClick={ actions.addCall}>Nueva llamada</button>

          { this.state.connected ?
            <span></span> :
          <button onClick={this.reconnect} style={{marginLeft: '10px', background: 'yellow', color: 'black', padding: '10px'}}>Reconectar</button>
          }
        </Navbar>
      )
    }
  }
