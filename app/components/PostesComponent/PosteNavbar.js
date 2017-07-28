import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { readPoste, addPoste, removePoste } from 'helpers/posteApi';
import { Link, Route } from 'react-router-dom';
import H1 from 'components/H1';

const style = {
  container : {
    padding: '20px'
  },
  header: {
    textAlign: 'center'
  },
  button : {
    top: '30px',
    left: '30px',
  position: 'relative'}
}



export default class PosteNavbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newModalOpen: false,
    }
  }




  render() {
    const {actions} = this.props;
        return(
          <div style={style.container}>

            <span onClick={() => alert(readPoste('3134639813')) }>alerta poste</span>
            <span onClick={() => addPoste('3002891', '50')}>Nuevo poste</span>
            <span onClick={() => removePoste('3002891', '50')}>Remover poste poste</span>

            <div style={style.header}>
              <H1>Postes</H1>
            </div>
          </div>
        )
  }
}
