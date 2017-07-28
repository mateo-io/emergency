import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CallActions } from 'actions';
import Home from 'components/Home';
import { withRouter } from 'react-router-dom'

// ALL TODO  THIS IS A COPY!!!!!!!!
const HomePage = ({history, user, activeCalls, actions}) => (
  <div>
    <Home history={history} user={user} activeCalls={activeCalls} actions={actions} />
  </div>
)

HomePage.propTypes = {
  user: PropTypes.object.isRequired,
  activeCalls: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user,
  activeCalls: state.calls.filter( (call) => call.open)
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(CallActions, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage))
