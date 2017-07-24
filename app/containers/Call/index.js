import React from "react";
import { bindActionCreators } from 'redux';
import CallView from 'components/CallView';
import { CallActions } from 'actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'

  class Call extends React.Component {
    render(){
      const {call, concesion, actions, history} = this.props;
      let emptyCalls = call==undefined;
      console.log("Empty calls is: ", emptyCalls)

      if (emptyCalls) {
        return (
          <div>Llamada sin crear</div>
        )
      } else {
      return(
        <div>
          <CallView history={history} concesion={concesion} call={call} actions={actions} />
        </div>
      )
      }

    }

  }
  Call.propTypes = {
    concesion: PropTypes.object,
    call: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  }

  const mapStateToProps = (state, ownProps) => ({
    concesion: state.concesion,
    call: state.calls.filter((call) => call.id==ownProps.match.params['id'])[0]
  })

  const mapDispatchToProps = dispatch => ({
      actions: bindActionCreators(CallActions, dispatch)
  })

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Call))
