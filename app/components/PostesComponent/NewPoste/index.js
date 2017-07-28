import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';

//CUSTOM
import Wrapper from './Wrapper';
import Form from './Form';
import Input from './Input';

//API





/** * A modal dialog can only be closed by selecting one of the actions.
 */
export default class NewPoste extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
    };
  }
  handleInputChange = (event) => {
   const target = event.target;
   const value = target.type === 'checkbox' ? target.checked : target.value;
   const name = target.name;

   this.setState({
     [name]: value
   });
 }

  //Login to API
  onSubmitForm = (evt) => {
    evt.preventDefault();
    // new poste api
    // new poste action

  }


  onSubmitForm2 = (evt) => {
    evt.preventDefault();
    const data = JSON.stringify(
      {"name":this.state.name,
      "concesionId":this.props.concesionId
     }
    );
    const configuration = new Headers({
       "Accept":"application/json",
       "Content-Type": "application/json",
       "Access-Control-Allow-Origin":"*"
     })

    fetch("http://localhost:3000/api/tramo", {
      method: "POST",
      headers: configuration,
      body: data
    })
      .then(res => res.json())
      .then((value) => {
        console.log("Tramo created", value);
        console.log("Data sent: ", data);
        this.props.addTramo(value);
        this.props.handleClose();
        return 'Tramo created';
        //ACTION TO CREATE A TRAMO
      })
    .catch((res) => {
      console.log("Values sent", data);
      console.log("ERROR!", res);
    })
}


  render() {
    const actions = [
      <FlatButton
        backgroundColor={ 'red' }
        style={ {color: 'white', width: '150px', height: '50px'} }
        hoverColor={ 'red' }
        label="CREAR"
        keyboardFocused={true}
        primary={true}
        onTouchTap={ this.onSubmitForm }
      />
    ];

    return (
      <Wrapper>
        <Dialog
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.props.handleClose}
          actionsContainerStyle={ {textAlign: 'center'} }
          bodyStyle={ {height: 'auto'} }
          contentStyle={ {height: 'auto', width: '550px'} }
          overlayStyle={ {background: 'gray', opacity: 0.80}}
          style={ {fontSize: '18px'}}
        >
          <h2>Nuevo Tramo</h2>
          <Form onSubmit={this.onSubmitForm}>

          <TextField
            floatingLabelFocusStyle= { {color: '#00BDA3'} }
            floatingLabelStyle= { {color: '#707070'} }
            hintText="nombre"
            floatingLabelText="NOMBRE"
            name="name"
            onChange={this.handleInputChange}
            /><br />
          </Form>

        </Dialog>
      </Wrapper>
    );
  }
}
