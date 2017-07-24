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
  }

renderNewUser = (props) => {
  return (
    <NewUser
    addUserToArray={this.props.actions.addUserToArray}
    {...props}
    />
  )
}

  render() {
    console.log("UserNavBar props", this.props);
    const {actions} = this.props;
        return(
          <div style={style.container}>
            <RaisedButton  containerElement={<Link to={`/users/new`} />} label="Nuevo Usuario" secondary={true} style={style.button} />
            <div style={style.header}>
              <H1>Usuarios</H1>
            </div>
            <Route path={`/users/new`} component={this.renderNewUser} />
          </div>
        )
  }
}
