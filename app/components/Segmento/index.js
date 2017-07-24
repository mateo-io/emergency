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
  }

}

const Segmento = ({name, prInicial, prFinal}) => {
  return(
    <Paper style={style.paper}>
      <h4>{name}</h4>

      <div>
        <Text small>PR INICIAL  </Text><Text>{prInicial}</Text>
      </div>

      <div>
        <Text small>PR FINAL  </Text><Text>{prFinal}</Text>
      </div>
    </Paper>
  )
}

export default Segmento;
