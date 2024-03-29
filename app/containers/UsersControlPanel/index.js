import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { UserActions } from 'actions';
import UserComponent from 'components/UserComponent';
import UserNavbar from './UserNavbar';
import { withRouter } from 'react-router-dom'
import EditUser from 'components/UserComponent/EditUser';
import AlertDelete from 'components/AlertDelete';
import TramoControlPanel from './TramoControlPanel';

// ALL TODO  THIS IS A COPY!!!!!!!!
class UsersControlPanel extends  React.Component {
  constructor() {
    super()
    this.state = {
      editModalOpen: false,
      openAlert: false,
      user: null
    } }

  componentWillMount() {
    this.props.actions.fetchUsers();
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    console.log("nextProps", nextProps);
    if(!nextProps.user) { return }
    if(!nextProps.userList) { return }
    this.setState({user: nextProps.userList.map((user) => user.id === nextProps.user.id)});
  }

  cancelDestroy = () => {
    this.setState({openAlert: false})
  }

  reallyDestroyUser = (id) => {
    if(this.state.currentUser) {
      console.log("reallyDestroyingUser", this.state.currentUser, id);

    const data = JSON.stringify(
      {
        "id": id
    }
  );
  const configuration = new Headers({
    "Accept":"application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin":"*"
  })

  fetch("http://localhost:3000/api/users/destroy", {
    method: "POST",
    headers: configuration,
    body: data
  })
  .then(res => res.json())
  .then((value) => {
    this.setState({openAlert: false});
    this.props.actions.removeUserFromArray(id);
    return {message: value};
  })
  .catch((res) => {
    console.log("Values sent", data);
    console.log("ERROR!", res);
  })

    } else {
      console.log("DestroyUser. Current user is none");
    }
  }


  handleDestroyUser = (evt) => {
    console.log("This evt traget", evt.target);
    console.log("This evt value", evt.target.value);
    const userId = evt.target.value;
    console.log("Destroying user", userId);
    this.setState({
        currentUser: this.props.userList.filter((user) => user.id == userId)[0],
        openAlert: true
      })
}

  handleUpdateUser = (evt) => {
    console.log("This evt traget", evt.target);
    console.log("This evt value", evt.target.value);
    const userId = evt.target.value;
    this.setState({
        currentUser: this.props.userList.filter((user) => user.id == userId)[0],
        editModalOpen: true
      })
}

  render() {
    const {history, actions, userList} = this.props;
    let { id } = this.state.currentUser ? this.state.currentUser.id : 0;
    return(
      <div>
        <TramoControlPanel />
      <AlertDelete
        tipo='usuario'
        id={id}
        reallyDestroy={() => this.reallyDestroyUser(this.state.currentUser.id)}
        cancelDestroy={this.cancelDestroy}
        open={this.state.openAlert} />

      <EditUser
        open={this.state.editModalOpen}
        handleClose={() => this.setState({editModalOpen: false})}
        updateUser={this.props.actions.updateUser}
        user={this.state.currentUser}
      />

      <UserNavbar history={history} actions={actions} />
      {userList.map(user => {
        return(
          <UserComponent
          key={user.id}
          onClickUpdate={this.handleUpdateUser}
          onClickDestroy={this.handleDestroyUser}
          user={user}
          actions={actions} />
        )
      })
    }
      </div>

    )
  }
}

UsersControlPanel.propTypes = {
  userList: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  userList: state.userList
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(UserActions, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersControlPanel))
