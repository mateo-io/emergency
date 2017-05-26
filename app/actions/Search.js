import * as types from 'constants/SearchActions'

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
