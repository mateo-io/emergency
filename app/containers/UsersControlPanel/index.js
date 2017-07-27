import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { UserActions } from 'actions';
import UserComponent from 'components/UserComponent';
import UserNavbar from './UserNavbar';
import PosteNavbar from './PosteNavbar';
import { withRouter } from 'react-router-dom'
import EditUser from 'components/UserComponent/EditUser';

// ALL TODO  THIS IS A COPY!!!!!!!!
class UsersControlPanel extends  React.Component {
  constructor() {
    super()
    this.state = {
      editModalOpen: false,
      user: null
    }
  }

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
    return(
      <div>
      <PosteNavbar />

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
          onClick={this.handleUpdateUser}
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
