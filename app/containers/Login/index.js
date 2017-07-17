import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { UserActions } from 'actions';
import LoginView from 'components/LoginView';

// ALL TODO  THIS IS A COPY!!!!!!!!
const Login = ({actions}) => (
  <div>
    <LoginView
    actions={actions} />
  </div>
)

Login.propTypes = {
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(UserActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
