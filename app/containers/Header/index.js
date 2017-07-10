import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CallActions, SearchActions, UserActions } from 'actions';
import HeaderComponent from 'components/HeaderComponent'




const Header = ({activeCalls, user, actions, searchActions, userActions}) => (
  <div>
    <HeaderComponent
    activeCalls={activeCalls}
    actions={actions}
    user={user}
    userActions={userActions}
    searchActions={searchActions} />
  </div>
)

Header.propTypes = {
  activeCalls: PropTypes.array.isRequired,
  user: PropTypes.object,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user,
  activeCalls: state.calls.filter( (call) => call.open)
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(CallActions, dispatch),
    searchActions: bindActionCreators(SearchActions, dispatch),
    userActions: bindActionCreators(UserActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
