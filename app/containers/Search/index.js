import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SearchActions } from 'actions';
import CallList from 'components/CallList';

// ALL TODO  THIS IS A COPY!!!!!!!!


const Search = ({calls, actions}) => (
  <div>
    <CallList calls={calls} actions={actions} />
  </div>
)


const getClosedCalls = (calls) => {
  return calls.filter( (call) => call.open==false)
}

const getVisibleCalls = (calls, filter) => {
  switch (filter) {
    case 'MOSTRAR_TODOS':
      return calls
    case 'MOSTRAR_AMBULANCIA':
      return calls.filter(t => t.type==='AMBULANCIA')
    case 'MOSTRAR_POLICIA':
      return calls.filter(t => t.type==='POLICIA')
    case 'MOSTRAR_GRUA':
      return calls.filter(t => t.type==='GRUA')
    case 'MOSTRAR_OTRO':
      return calls.filter(t => t.type==='OTRO')
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

Search.propTypes = {
  calls: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

  //calls: state.calls.filter( (call) => call.open==false)
const mapStateToProps = (state) => ({
  calls: getVisibleCalls(getClosedCalls(state.calls), state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(SearchActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
