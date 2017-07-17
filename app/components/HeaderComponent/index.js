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
    };


    socket.on('connected', (data) => {
      console.log("ready for data");
      socket.emit('ready for data', {});
      this.setState({connected: true});
    });

    socket.on('disconnect', function() {
      this.setState({connected: false})
      alert('Se ha desconectado de la red');
    }.bind(this));

    socket.on('update', function(data) {
      console.log("Call added dude")
      this.props.actions.addCall(this.props.user.email)
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

  handleAddCall = () => {
      console.log("Handle add call");
      this.props.actions.addCall(this.props.user.nombre);
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
    const { activeCalls, actions, user } = this.props;

    if(user.cedula) {
    return(
      <div>
        <div>
        <Navbar>
        <HeaderLink to="/dashboard">
        {activeCalls.length} | Llamadas
        </HeaderLink>

        <HeaderLink to="/table">
        Tabla
        </HeaderLink>

        <HeaderLink to="/tramos">
        Tramos
        </HeaderLink>


        <HeaderLink to="/usuario">
         {user.nombre}
        </HeaderLink>

        <HeaderLink to="/login" onClick={this.props.userActions.logout}>
        Cerrar Sesion
        </HeaderLink>


        <HeaderLink to="/dashboard" onClick={this.handleAddCall}>
        Nueva Llamada
        </HeaderLink>

        </Navbar>

      </div>
      {this.props.children}
    </div>
    )

  } else {
    return null
  }
  }
}
