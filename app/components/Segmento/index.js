import React from 'react';
import Text from 'components/Text';
import Paper from 'material-ui/Paper';

const style = {
  paper : {
    display: 'inline-block',
    padding: '10px',
    textAlign: 'center',
    margin: '10px',
    height: '180px',
    width: '200px'
  },
  attributeContainer : {
    marginTop: '34px',
    position: 'relative'
  }

}

const Segmento = ({name, id, prInicial, prFinal, onClickUpdate, onClickDestroy}) => {
  return(
    <Paper style={style.paper}>
      <h4>{name}</h4>

      <div>
        <Text small>PR INICIAL  </Text><Text>{prInicial}</Text>
      </div>

      <div>
        <Text small>PR FINAL  </Text><Text>{prFinal}</Text>
      </div>


    <div style={style.attributeContainer}>
      <button value={id} onClick={onClickUpdate}>Editar</button>
      <button value={id} onClick={onClickDestroy}>Borrar</button>
    </div>
    </Paper>
  )
}

export default Segmento;
