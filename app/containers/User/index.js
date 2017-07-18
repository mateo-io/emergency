import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { UserActions } from 'actions';
import UserComponent from 'components/UserComponent';

// ALL TODO  THIS IS A COPY!!!!!!!!
const User = ({actions, user}) => (
  <div>
    <UserComponent
      user={user}
      actions={actions} />
  </div>
)

User.propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(UserActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(User)
