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

      case 'ADD_SERVICE':
      console.log("ADD SERVICE DUDE");
      return state.map(call =>
        call.id === action.id ?
          { ...call,
            services: call.services + 1 || 2,
          } :
          call
      )

      case 'UPDATE_AUDIO':
      return state.map(call =>
        call.id === action.id ?
          { ...call, audioPath: action.text  } :
          call
      )

      case 'UPDATE_CALL':
      const field = action.field;
      return state.map(call =>
        call.id === action.id ?
          { ...call, field: action.text  } :
          call
      )

    case EDIT_TYPE:
      return state.map(call =>
        call.id === action.id ?
          { ...call, type: action.text  } :
          call
      )

    case 'EDIT_TYPE2':
      return state.map(call =>
        call.id === action.id ?
          { ...call, type2: action.text  } :
          call
      )


    case 'EDIT_TYPE3':
      return state.map(call =>
        call.id === action.id ?
          { ...call, type3: action.text  } :
          call
      )

    case 'EDIT_TYPE4':
      return state.map(call =>
        call.id === action.id ?
          { ...call, type4: action.text  } :
          call
      )

    case UPDATE_DISPATCHED:
      return state.map(call =>
        call.id === action.id ?
          { ...call, dispatched: action.date,
          status: 'DESPACHADO'  } :
          call
      )

    case 'UPDATE_DISPATCHED2':
      return state.map(call =>
        call.id === action.id ?
          { ...call, dispatched2: action.date
          } :
          call
      )

    case 'UPDATE_DISPATCHED3':
      return state.map(call =>
        call.id === action.id ?
          { ...call, dispatched3: action.date
          } :
          call
      )

    case 'UPDATE_DISPATCHED4':
      return state.map(call =>
        call.id === action.id ?
          { ...call, dispatched4: action.date
           } :
          call
      )

    case UPDATE_DURATION:
      return state.map(call =>
        call.id === action.id ?
        (!call.duration ?
          { ...call, duration: action.value  } : '') :
          call
      )

    case UPDATE_ARRIVED:
      return state.map(call =>
        call.id === action.id ?
          { ...call,
            duration: (Date.now()-call.callStart)/1000,
            status: 'FINALIZADO',
          	arrived: action.date  } :
          call
      )


    case 'UPDATE_ARRIVED2':
      return state.map(call =>
        call.id === action.id ?
          { ...call,
            duration2: (Date.now()-call.callStart)/1000,
          	arrived2: action.date  } :
          call
      )
    case 'UPDATE_ARRIVED3':
      return state.map(call =>
        call.id === action.id ?
          { ...call,
            duration3: (Date.now()-call.callStart)/1000,
          	arrived3: action.date  } :
          call
      )

    case 'UPDATE_ARRIVED4':
      return state.map(call =>
        call.id === action.id ?
          { ...call,
            duration4: (Date.now()-call.callStart)/1000,
          	arrived4: action.date  } :
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
            callerNumber: payload.clid.match(/^\d+|\d+\b|\d+(?=\w)/g),
            poste: payload.src
          } :
          call
      )


    case 'UPDATE_DESTINO':
      return state.map(call =>
        call.id === action.id ?
          { ...call, destino: action.text
           }
           :
          call
      )

    case 'ADD_ANTES_DESPUES':
      return state.map(call =>
        call.id === action.id ?
          { ...call, accidenteRelativo: action.text==='antes' ? 'antes' : 'despues'
           }
           :
          call
      )

    case 'ADD_USER_POSTE_DISTANCE':
      return state.map(call =>
        call.id === action.id ?
          { ...call, posteDistance: action.text
           }
           :
          call
      )

    case 'ADD_USER_POSTE':
    console.log("USER POSTE REDUCERRRR")
      return state.map(call =>
        call.id === action.id ?
          { ...call, userPoste: action.number
           }
           :
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
