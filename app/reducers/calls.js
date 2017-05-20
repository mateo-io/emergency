import { ADD_CALL, DELETE_CALL, EDIT_TYPE,
  UPDATE_DISPATCHED, UPDATE_ARRIVED, ADD_COMMENT,
  OPEN_CALL, ADD_PHONE_INFO,
  COMPLETE_CALL, COMPLETE_ALL, CLEAR_COMPLETED }
from 'constants/CallActions'



const initialState = [
  {
    id: 2,
    callStart: new Date(),
    duration: 100,
    status: "VIVO",
    open: true,
    origin: "El tablazo",
    poste: "12",
    comments: ["Heridos por una tractomula"],
    type: "AMBULANCIA",
    dispatched: new Date(),
    arrived: undefined,
    uniqueid: undefined
  },
  {
    id: 1,
    callStart: new Date(),
    duration: undefined,
    status: "ESPERA",
    open: true,
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
    duration: 23,
    open: false,
    callStart: new Date(),
    status: "FINALIZADO",
    origin: "Las nieves KM 12",
    poste: "130",
    comments: ["Ladrones hurtaron una moto en el parador Las Colinas"],
    type: "POLICIA",
    dispatched: new Date(),
    arrived:  new Date(Date.now()+3600000),
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
          status: "VIVO",
          origin: "ALGUN LUGAR",
          poste: "1984",
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
          { ...call, dispatched: action.date  } :
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
        console.log("ID: ", action.id)
      return state.map(call =>
        call.id === action.id ?
          { ...call,
            uniqueid: action.data.payload
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
          { ...call, open: true, status: 'CONTESTADA'  } :
          call
      )


    case COMPLETE_ALL:
      const areAllMarked = state.every(call => call.completed)
      return state.map(call => ({
        ...call,
        completed: !areAllMarked
      }))

    case CLEAR_COMPLETED:
      return state.filter(call => call.completed === false)

    default:
      return state
  }
}
