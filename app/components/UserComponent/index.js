import React from 'react';
import Text from 'components/Text';
import Paper from 'material-ui/Paper';

const style = {
  paper : {
    display: 'inline-block',
    padding: '10px',
    textAlign: 'center',
    lineHeight: '3em',
    margin: '10px',
    height: '400px',
    width: '600px'
  }

}

const UserComponent = ({user}) => {
  const { nombre, concesionId, cedula }  = user;
  return(
    <Paper style={style.paper}>
      <Text>Nombre: </Text>
      <h4>{nombre}</h4>

      <Text>Concesion</Text>
      <h4>{concesionId}</h4>

      <Text>Cedula</Text>
      <h4>{cedula}</h4>

      <Text>Servicios Atendidos</Text>
      <h4>"POR FINALIZAR"</h4>

      <h5>Por terminar: Actualizacion de datos</h5>
    </Paper>
  )
}

export default UserComponent;
