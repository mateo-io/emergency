import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SearchActions, CallActions } from 'actions';
import CallList from 'components/CallList';
import CallTable from 'components/CallTable';
import Statistics from 'components/Statistics';

// ALL TODO  THIS IS A COPY!!!!!!!!

const getClosedCalls = (calls) => {
  return calls.filter( (call) => call.open==false)
}

const getCallsByDate = (calls, startDate, endDate) => {
  if (calls==undefined) {return}
  return calls.filter( (call) =>
  startDate <= call.callStart && call.callStart <= endDate
)
}

const getCallsByType = (calls, filter) => {
  switch (filter) {
    case 'MOSTRAR_TODOS':
    return calls
    case 'MOSTRAR_AMBULANCIA':
    return calls.filter(t => {
      return t.type==='AMBULANCIA' ||
      t.type2==='AMBULANCIA' ||
      t.type3==='AMBULANCIA' ||
      t.type4==='AMBULANCIA'
    })
    case 'MOSTRAR_POLICIA':
    return calls.filter(t => {
      return t.type==='POLICIA' ||
      t.type2==='POLICIA' ||
      t.type3==='POLICIA' ||
      t.type4==='POLICIA'
    })
    case 'MOSTRAR_GRUA':
    return calls.filter(t => {
      return t.type==='GRUA' ||
      t.type2==='GRUA' ||
      t.type3==='GRUA' ||
      t.type4==='GRUA'
    })
    case 'MOSTRAR_BOMBEROS':
    return calls.filter(t => {
      return t.type==='BOMBEROS' ||
      t.type2==='BOMBEROS' ||
      t.type3==='BOMBEROS' ||
      t.type4==='BOMBEROS'
    })
    case 'MOSTRAR_OTRO':
    return calls.filter(t => {
      return t.type==='OTRO' ||
      t.type2==='OTRO' ||
      t.type3==='OTRO' ||
      t.type4==='OTRO'
    })
    case 'MOSTRAR_BLOQUEOS':
    return calls.filter(t => {
      return t.type==='BLOQUEOS' ||
      t.type2==='BLOQUEOS' ||
      t.type3==='BLOQUEOS' ||
      t.type4==='BLOQUEOS'
    })
    default:
    throw new Error('Unknown filter: ' + filter)
  }
}

const getCallsByDuration = (calls, startDate, endDate) => {
  if (calls==null) { return }
  if (startDate==null) {return calls}
  if (endDate == null) {
    return calls.filter( (call) => {
      return startDate <= call.duration
    })
  }

  console.log("By duration got here", startDate, endDate)

  return calls.filter( (call) => {
    console.log(call.duration)
    return startDate <= call.duration && call.duration <= endDate
  })
}


const getCallsByCallDuration = (calls, startDate, endDate) => {
  if (calls === null ) { return 'calls is null' }
  else if (startDate === null ) { return calls }
  else if (endDate === null ) {
    return calls.filter((call) =>  call.callDuration >= startDate)
  }

  return calls.filter( (call) => {
    console.log(call.callDuration)
    return startDate <= call.callDuration && call.callDuration <= endDate
  })
}

const getCallsByPoste = (calls, poste) => {
  if(poste=='ALL'){
    return calls
  } else {
    return calls.filter( (call) => {
      return call.numeroPoste===poste
    })
  }
}

const getVisibleCalls = (calls, filterObject) => {

  const closedCalls = getClosedCalls(calls);
  console.log("Closed", closedCalls.length)

  const typeMatches = getCallsByType(closedCalls, filterObject.type);
  console.log("type", typeMatches.length)

  const dateMatches = getCallsByDate(typeMatches, filterObject.initialDate, filterObject.endDate);
  console.log("date", dateMatches.length)

  const durationMatches = getCallsByDuration(dateMatches, filterObject.durationInitial, filterObject.durationEnd)
  console.log("duration", durationMatches.length)

  const callDurationMatches = getCallsByCallDuration(durationMatches, filterObject.callDurationInitial, filterObject.callDurationEnd)
  console.log("callDuration", callDurationMatches.length)

  //durationLengthMatches

  return callDurationMatches
}


class Search extends React.Component {


  //calls: state.calls.filter( (call) => call.open==false)


  render(){

    const {calls, visibilityFilter, searchActions, callActions, match} = this.props;
    if(match.url=='/table') {
      console.log("TABLE IS TRUEEE!")

      return(
        <div>
        <CallTable visibilityFilter={visibilityFilter} calls={calls}
        callActions={callActions}
        searchActions={searchActions} />
        </div>
      )
    }
    console.log(match.url==="/table")
    console.log(match.url, typeof match.url)

    if(match.url==="/statistics"){
      return(
        <div>
        <Statistics
        visibilityFilter={visibilityFilter}
        calls={calls}
        callActions={callActions}
        searchActions={searchActions}
        />
        </div>
      )

    } else {
      return(
        <div>
        <CallList visibilityFilter={visibilityFilter} calls={calls}
        callActions={callActions}
        searchActions={searchActions} />
        </div>
      )
    }
  }
  }

const mapStateToProps = (state) => ({
  calls: getVisibleCalls(state.calls, state.visibilityFilter),
  visibilityFilter: state.visibilityFilter
})

const mapDispatchToProps = dispatch => ({
  callActions: bindActionCreators(CallActions, dispatch),
  searchActions: bindActionCreators(SearchActions, dispatch)
})

Search.propTypes = {
  calls: PropTypes.array.isRequired,
  callActions: PropTypes.object.isRequired,
  searchActions: PropTypes.object.isRequired
}


export default connect(mapStateToProps, mapDispatchToProps)(Search)
