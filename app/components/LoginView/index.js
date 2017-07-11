import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Link, Redirect } from 'react-router';

//CUSTOM
import Wrapper from './Wrapper';
import Title from 'components/Title';
import Form from './Form';
import Input from './Input';
import Background from './Background';




/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class LoginView extends React.Component {
  state = {
    open: false,
    loggedIn: false,
    username: '',
    password: '',
    name: '',
    email: ''
  };


  onChangeUsername = (evt)  => {
    this.state.username = evt.target.value;
  }

  onChangePassword = (evt)  => {
    this.state.password = evt.target.value;
  }

  getUserData = (token) => {
    console.log("token is ", token)
    const configuration = {
       "Accept":"application/json",
       "Content-Type": "application/json",
       "Access-Control-Allow-Origin":"*",
       "Authorization": `Bearer ${token}`
     }

     const that = this;

    fetch("http://localhost:3000/api/users/me", {
      method: "GET",
      headers: configuration

    })
    .then ((res)=> {
      if(res.status == 500) { console.log("didn't work"); return; }
      console.log("Res status: ", res.status)

      return Promise.resolve(res.json())
      .then((value) => {
      console.log("Get user data worked!", value);
      return this.props.actions.setUser(value);
      })
      .then(() => {
        console.log("LoggedIn TRUE");
        return this.setState({loggedIn: true});
      })
  })
    .catch ( (res)=> {console.log("ERROR!", res)} )

  }

  //Login to API
  onSubmitForm = () => {
    const data = JSON.stringify({ "username":this.state.username,
        "password":this.state.password
      });
    const configuration = new Headers({
       "Accept":"application/json",
       "Content-Type": "application/json",
       "Access-Control-Allow-Origin":"*"
     })

    fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: configuration,
      body: data

    })
    .then((res) => {
      return Promise.resolve(res.json())
      .then(value => {
        const token = value.token;
        return this.getUserData(token);
      })
    })
    .catch((res) => { console.log("ERROR!", res) })
}

  render() {
    return (
      <Background>
      {this.state.loggedIn && <Redirect to="/dashboard" push />}
      <Wrapper>
          <div style=
            {{
              width: '500px',
              position: 'relative',
              backgroundColor: 'white',
              height: '400px',
              margin: '0 auto',
              top: '200px'
            }}>

          <Title header  center text="LOGIN" />
          <Form onSubmit={this.onSubmitForm}>

          <TextField
            floatingLabelFocusStyle= { {color: '#00BDA3'} }
            floatingLabelStyle= { {color: '#707070'} }
            hintText="usuario"
            floatingLabelText="USUARIO"
            onChange={this.onChangeUsername}
            /><br />

          <TextField
            floatingLabelFocusStyle= { {color: '#00BDA3'} }
            floatingLabelStyle= { {color: '#707070'} }
            style={ {marginTop: '40px'} }
            hintText="contraseña"
            floatingLabelText="CONTRASEÑA"
            type="password"
            onChange={this.onChangePassword}
            /><br />


          </Form>
      <div>
      <FlatButton
        backgroundColor={ 'green' }
        style={ {color: 'white', width: '150px', height: '50px', marginTop: '50px'} }
        hoverColor={ 'red' }
        label="ENTRAR"
        keyboardFocused={true}
        primary={true}
        onTouchTap={ this.onSubmitForm }
      />
        </div>

        </div>

      </Wrapper>
      </Background>
    );
  }
}
