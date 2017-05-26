import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CallActions, SearchActions } from 'actions';
import HeaderComponent from 'components/HeaderComponent'




const Header = ({activeCalls, actions, searchActions}) => (
  <div>
    <HeaderComponent activeCalls={activeCalls} actions={actions}
    searchActions={searchActions} />
  </div>
)

Header.propTypes = {
  activeCalls: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  activeCalls: state.calls.filter( (call) => call.open)
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(CallActions, dispatch),
    searchActions: bindActionCreators(SearchActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
