import React from 'react';
import Text from 'components/Text';
import Paper from 'material-ui/Paper';

const style = {
  paper : {
    display: 'inline-block',
    padding: '10px',
    textAlign: 'center',
    margin: '10px',
    height: '140px',
    width: '180px'
  },
  attributeContainer : {
    marginTop: '34px',
    position: 'relative'
  }

}

const Tramo = ({tramo, id, onClickUpdate, onClickDestroy}) => {
  const { name } = tramo;
  return(
    <Paper style={style.paper}>
      <h4>{name}</h4>

    <div style={style.attributeContainer}>
      <button value={id} onClick={onClickUpdate}>Editar</button>
      <button value={id} onClick={onClickDestroy}>Borrar</button>
    </div>
    </Paper>
  )
}

export default Tramo;
