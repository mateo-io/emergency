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
export default class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      cedula: '',
      isAdmin: false,
      value: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log("On receive props. Next props are", nextProps);

    if(!nextProps.user) { return }

    if(nextProps.user.id && nextProps.user.id!==this.state.id) {
      const { id, name, cedula, isAdmin } = nextProps.user;

      console.log("Inside willReceiveNextProps", name, cedula, isAdmin);

      this.setState({
        id,
        name,
        cedula,
        isAdmin,
        value: isAdmin===true ? 1 : 0,
        userLoaded: true
      });
    }
  }


  handleDropdownChange = (event, index, value ) => {
    this.setState({
      ['value']: value,
      ['isAdmin']: event.target.textContent.toLowerCase()==='administrador'
    });
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
        "name":this.state.name,
        "cedula":this.state.cedula,
        "concesionId":1,
        "password":this.state.password,
        "isAdmin":this.state.isAdmin
    }
  );
  const configuration = new Headers({
    "Accept":"application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin":"*"
  })

  fetch("http://localhost:3000/api/users/update", {
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
    return 'Segmento created';
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
    <h2>Editar Usuario</h2>
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


    <TextField
    floatingLabelFocusStyle= { {color: '#00BDA3'} }
    floatingLabelStyle= { {color: '#707070'} }
    hintText="cedula"
    floatingLabelText="CEDULA"
    name="cedula"
    value={this.state.cedula}
    onChange={this.handleInputChange}
    /><br />


    <DropDownMenu style={ {width: '300px', right: '25px', marginTop: '20px'} } maxHeight={300} value={this.state.value} name="isAdmin" onChange={this.handleDropdownChange}>
    <MenuItem key={0} value={0} name="operador" primaryText={`Operador`} />
    <MenuItem key={1} value={1} name="admin" primaryText={`Administrador`} />
    </DropDownMenu>
    </Form>

    </Dialog>
    </Wrapper>
  );
}
}
