import * as types from 'constants/SearchActions'

export const setDurationFilter1 = () => ({ type: 'SET_DURATION_1'})
export const setDurationFilter2 = () => ({ type: 'SET_DURATION_2'})
export const setDurationAll = () => ({ type: 'SET_DURATION_ALL'})


export const setCallDurationFilter1 = () => ({ type: 'SET_CALL_DURATION_1'})
export const setCallDurationFilter2 = () => ({ type: 'SET_CALL_DURATION_2'})
export const setCallDurationAll = () => ({ type: 'SET_CALL_DURATION_ALL'})
export function receiveCalls(json) {
  return {
    type: 'RECEIVE_CALLS',
    calls: json.map(child => {
      const call = child.data;
      call.callStart = new Date(call.callStart)
      call.dispatched = new Date(call.dispatched)
      call.arrived = new Date(call.arrived)
      return call;
    }
    ),
    receivedAt: Date.now()
  }
}

export function fetchCalls() {
  console.log("I'm fetching calls")
  return dispatch => {
    return fetch(`http://localhost:3000/api/calls`)
      .then(response => response.json())
      .then(json => {
        console.log("JSON", json)
        dispatch(receiveCalls(json))
    })
  }
}
