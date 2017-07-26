import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link, Route } from 'react-router-dom';
import H1 from 'components/H1';
import NewUser from 'components/UserComponent/NewUser';

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



export default class UserNavbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newModalOpen: false,
    }
  }




  render() {
    console.log("UserNavBar props", this.props);
    const {actions} = this.props;
        return(
          <div style={style.container}>

            <NewUser
              open={this.state.newModalOpen}
              handleClose={() => this.setState({newModalOpen: false})}
              addUserToArray={this.props.actions.addUserToArray}
            />

            <RaisedButton onClick={() => this.setState({newModalOpen: true})} label="Nuevo Usuario" secondary={true} style={style.button} />
            <div style={style.header}>
              <H1>Usuarios</H1>
            </div>
          </div>
        )
  }
}
