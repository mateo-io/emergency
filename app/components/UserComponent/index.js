import React from 'react';
import Text from 'components/Text';
import Paper from 'material-ui/Paper';

const style = {
  paper : {
    display: 'inline-block',
    margin: '20px',
    textAlign: 'center',
    lineHeight: '3em',
    height: '300px',
    width: '400px'
  }

}

const UserComponent = ({user}) => {
  const { name, cedula, isAdmin }  = user;
  return(
    <Paper style={style.paper}>
      <Text>Nombre: </Text>
      <h4>{name}</h4>

      <Text>Cedula</Text>
      <h4>{cedula}</h4>

      <Text>Administrador</Text>
      <h4>{isAdmin==="true" ? 'Si' : 'No'}</h4>

    </Paper>
  )
}

export default UserComponent;
