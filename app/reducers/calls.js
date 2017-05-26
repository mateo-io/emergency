import { ADD_CALL, DELETE_CALL, EDIT_TYPE,
  UPDATE_DISPATCHED, UPDATE_ARRIVED, ADD_COMMENT,
  OPEN_CALL, ADD_PHONE_INFO,
  COMPLETE_CALL, COMPLETE_ALL, CLEAR_COMPLETED, UPDATE_DURATION }
from 'constants/CallActions'

import { RECEIVE_CALLS} from 'constants/SearchActions'



const initialState = [
  {
    id: 4,
    callStart: new Date(Date.now()-158400000),
    callEnd: new Date(Date.now()+3600),
    callDuration: 12,
    duration: 160,
    status: "FINALIZADO",
    open: false,
    origin: "El arbolito",
    poste: "003",
    comments: ["Bomberos", "Tronco en llamas"],
    type: "OTRO",
    dispatched: new Date(),
    arrived: new Date(Date.now()+3700000),
    uniqueid: undefined
  },
  {
    id: 3,
    callStart: new Date(Date.now()-188400000),
    callEnd: new Date(Date.now()+3600),
    callDuration: 12,
    duration: 100,
    status: "FINALIZADO",
    open: false,
    origin: "Buenavista",
    poste: "003",
    comments: ["Carro necesita grua.", "Posible falla del motor"],
    type: "GRUA",
    dispatched: new Date(),
    arrived: new Date(Date.now()+3700000),
    uniqueid: undefined
  },
  {
    id: 2,
    callStart: new Date(Date.now()-88400000),
    callEnd: new Date(Date.now()+3600),
    callDuration: 12,
    duration: 100,
    status: "FINALIZADO",
    open: false,
    origin: "El tablazo",
    poste: "003",
    comments: ["Heridos por una tractomula"],
    type: "OTRO",
    dispatched: new Date(),
    arrived: new Date(Date.now()+3700000),
    uniqueid: undefined
  },
  {
    id: 1,
    callStart: new Date(0),
    callEnd: new Date(Date.now()+4600000),
    callDuration: 12,
    duration: 25,
    status: "FINALIZADO",
    open: false,
    origin: "Soledad",
    poste: "21",
    comments: [""],
    type: "GRUA",
    dispatched: new Date(),
    arrived: undefined,
    uniqueid: undefined
  },
  {
    id: 0,
    callDuration: 12,
    duration: 23,
    open: false,
    callStart: new Date(),
    callEnd: new Date(Date.now()+3800000),
    status: "FINALIZADO",
    origin: "Las nieves KM 12",
    poste: "130",
    comments: ["Ladrones hurtaron una moto en el parador Las Colinas"],
    type: "POLICIA",
    dispatched: new Date(),
    arrived:  new Date(Date.now()+4800000),
    uniqueid: 1494962212.27
  },
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
          status: "VIVO",
          origin: "Km 12",
          poste: "003",
          comments: [],
          type: "",
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
            duration: (Date.now()-call.callStart)/1000,
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
          { ...call, arrived: action.date  } :
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
            uniqueid: payload.uniqueid,
            callDuration: payload.duration,
            poste: payload.src
          } :
          call
      )

    case COMPLETE_CALL:
      return state.map(call =>
        call.id === action.id ?
          { ...call, open: false, duration:(new Date()-call.callStart)/1000,
           status: 'FINALIZADO'}
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
