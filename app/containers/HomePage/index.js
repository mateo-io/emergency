import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CallActions } from 'actions';
import Home from 'components/Home';

// ALL TODO  THIS IS A COPY!!!!!!!!
const HomePage = ({activeCalls, actions}) => (
  <div>
    <Home activeCalls={activeCalls} actions={actions} />
  </div>
)

HomePage.propTypes = {
  activeCalls: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  activeCalls: state.calls
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(CallActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
