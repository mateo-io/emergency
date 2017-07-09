import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CallActions } from 'actions';
import LoginView from 'components/LoginView';

// ALL TODO  THIS IS A COPY!!!!!!!!
const Login = ({activeCalls, actions}) => (
  <div>
    <LoginView activeCalls={activeCalls} actions={actions} />
  </div>
)

Login.propTypes = {
  activeCalls: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  activeCalls: state.calls.filter( (call) => call.open)
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(CallActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
