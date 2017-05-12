import React from "react";
import { bindActionCreators } from 'redux';
import CallView from 'components/CallView';
import { CallActions } from 'actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


  const Call = ({call, actions, history}) => (
    <div>
      <CallView history={history} call={call} actions={actions} />
    </div>
  )

  Call.propTypes = {
    call: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  }

  const mapStateToProps = (state, ownProps) => ({
    call: state.calls.filter( (call) => call.id==ownProps.match.params['id'])[0]
  })

  const mapDispatchToProps = dispatch => ({
      actions: bindActionCreators(CallActions, dispatch)
  })

  export default connect(mapStateToProps, mapDispatchToProps)(Call)