import { ADD_CALL, DELETE_CALL, EDIT_TYPE,
  UPDATE_DISPATCHED, UPDATE_ARRIVED, ADD_COMMENT,
  OPEN_CALL, ADD_PHONE_INFO,
  COMPLETE_CALL, COMPLETE_ALL, CLEAR_COMPLETED, UPDATE_DURATION }
from 'constants/CallActions'

import { RECEIVE_CALLS} from 'constants/SearchActions'



const initialState = [
  {}
]

export default function calls(state = initialState, action) {
  switch (action.type) {
    case ADD_CALL:
      return [
        {
          ...state.call,
          id: state.reduce((maxId, call) => Math.max(call.id, maxId), -1) + 1,
          duration: 0,
          open: true,
          callStart: new Date(),
          callEnd: undefined,
          status: "INICIADO",
          callStatus: "VIVO",
          origin: undefined,
          poste: undefined,
          comments: [],
          type: undefined,
          dispatched: undefined,
          arrived:  undefined,
          uniqueid: undefined
        },
        ...state
      ]

    case DELETE_CALL:
      return state.filter(call =>
        call.id !== action.id
      )

    case EDIT_TYPE:
        console.log("ACTION: ", action)
      return state.map(call =>
        call.id === action.id ?
          { ...call, type: action.text  } :
          call
      )


    case UPDATE_DISPATCHED:
        console.log("ACTION: ", action)
      return state.map(call =>
        call.id === action.id ?
          { ...call, dispatched: action.date,
          status: 'DESPACHADO'  } :
          call
      )
    case UPDATE_DURATION:
        console.log("ACTION: ", action)
      return state.map(call =>
        call.id === action.id ?
        (!call.duration ?
          { ...call, duration: action.value  } : '') :
          call
      )

    case UPDATE_ARRIVED:
        console.log("ACTION: ", action)
      return state.map(call =>
        call.id === action.id ?
          { ...call,
            duration: (Date.now()-call.callStart)/1000,
            status: 'FINALIZADO',
	 arrived: action.date  } :
          call
      )

    case ADD_COMMENT:
        console.log("ACTION: ", action)
      return state.map(call =>
        call.id === action.id ?
          { ...call,
            comments: [...call.comments, action.text]
          } :
          call
      )


    case ADD_PHONE_INFO:
        console.log("ACTION: ", action)
        console.log("PAYLOAD: ", action.data.payload)
        const payload = JSON.parse(action.data.payload);
      return state.map(call =>
        call.id === action.id ?
          { ...call,
            callStatus: 'COLGADA',
            uniqueid: payload.uniqueid,
            callDuration: payload.duration,
            callerId: payload.clid,
            poste: payload.src
          } :
          call
      )

    case COMPLETE_CALL:
      return state.map(call =>
        call.id === action.id ?
          { ...call, open: false
           }
           :
          call
      )

    case OPEN_CALL:
      return state.map(call =>
        call.id === action.id ?
          { ...call, open: true, status: 'REABIERTO'  } :
          call
      )

    case RECEIVE_CALLS:
        console.log("I'm called");
        console.log("With data", action.calls )
        return [
          ...state.filter( (call) => call.open ),
          ...action.calls,
        ]


    default:
      return state
  }
}
