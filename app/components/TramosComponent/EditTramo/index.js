import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

//CUSTOM
import Wrapper from './Wrapper';
import Form from './Form';
import Input from './Input';




/**
* A modal dialog can only be closed by selecting one of the actions.
*/
export default class EditTramo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log("On receive props. Next props are", nextProps);

    if(!nextProps.segmento) { return }

    if(nextProps.segmento.id && nextProps.segmento.id!==this.state.id) {
      const { id, name } = nextProps.segmento;

      console.log("Inside willReceiveNextProps", name);

      this.setState({
        id,
        name,
        tramoLoaded: true
      });
    }
  }




  handleInputChange = (event, index, value) => {
    const target = event.target;
    const targetValue = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: targetValue
    });
  }

  onSubmitForm = (evt) => {
    evt.preventDefault();
    const data = JSON.stringify(
      {
        "id": this.state.id,
        "data" : {
          "name":this.state.name,
        }
    }
  );
  const configuration = new Headers({
    "Accept":"application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin":"*"
  })

  fetch("http://localhost:3000/api/tramo/update", {
    method: "POST",
    headers: configuration,
    body: data
  })
  .then(res => res.json())
  .then((value) => {
    console.log("User created", value);
    console.log("Data sent: ", data);
    let parsedUser = JSON.parse(data)
    let userId = this.state.id;
    this.props.updateUser(userId, value);
    this.props.handleClose();
    return 'Tramo updated';
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
    label="ACTUALIZAR"
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
    <h2>Editar Tramo</h2>
    <Form onSubmit={this.onSubmitForm}>

    <TextField
    floatingLabelFocusStyle= { {color: '#00BDA3'} }
    floatingLabelStyle= { {color: '#707070'} }
    hintText="nombre"
    floatingLabelText="NOMBRE"
    name="name"
    value={this.state.name}
    onChange={this.handleInputChange}
    /><br />





    </Form>

    </Dialog>
    </Wrapper>
  );
}
}
