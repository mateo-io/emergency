import React from "react";
import { bindActionCreators } from 'redux';
import CallView from 'components/CallView';
import { CallActions } from 'actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


  const Call = ({call, id, actions}) => (
    <div>
      <CallView id={id} call={call} />
    </div>
  )

  Call.propTypes = {
    call: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
  }

  const mapStateToProps = (state, ownProps) => ({
    call: state.calls.filter( (call) => call.id==ownProps.match.params['id'])
  })

  const mapDispatchToProps = dispatch => ({
      actions: bindActionCreators(CallActions, dispatch)
  })

  export default connect(mapStateToProps, mapDispatchToProps)(Call)
