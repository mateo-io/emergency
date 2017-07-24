import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { UserActions } from 'actions';
import UserComponent from 'components/UserComponent';
import UserNavbar from './UserNavbar';
import { withRouter } from 'react-router-dom'

// ALL TODO  THIS IS A COPY!!!!!!!!
class UsersControlPanel extends  React.Component {
  componentWillMount() {
    this.props.actions.fetchUsers();
  }

  render() {
    const {history, actions, userList} = this.props;
    return(
      <div>
      <UserNavbar history={history} actions={actions} />
      {userList.map(user => {
        return(
          <UserComponent
          key={user.id}
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
