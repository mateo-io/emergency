import React from 'react';
import Text from 'components/Text';
import Paper from 'material-ui/Paper';

const style = {
  paper : {
    display: 'inline-block',
    margin: '20px',
    textAlign: 'center',
    lineHeight: '1em',
    height: '300px',
    width: '350px'
  },
  attributeContainer : {
    marginTop: '34px',
    position: 'relative'
  }

}

const UserComponent = ({user, actions, onClick}) => {
  const { id, name, cedula, isAdmin }  = user;
  console.log("user id", id)
  return(
    <Paper style={style.paper}>
      <div style={style.attributeContainer}>
        <h4>{name}</h4>
        <Text plain small>NOMBRE</Text>
      </div>

    <div style={style.attributeContainer}>
      <h4>{cedula}</h4>
      <Text plain small>CEDULA</Text>
    </div>

    <div style={style.attributeContainer}>
      <h4>{String(isAdmin)==='true' ? 'Si' : 'No'}</h4>
      <Text plain small>ADMIN</Text>
    </div>

    <div style={style.attributeContainer}>
      <button value={user.id} onClick={onClick}>Editar</button>
    </div>

    </Paper>
  )
}

export default UserComponent;
