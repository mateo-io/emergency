import { ADD_CALL, DELETE_CALL, EDIT_TYPE, COMPLETE_CALL, COMPLETE_ALL, CLEAR_COMPLETED }
from 'constants/CallActions'



const initialState = [
  {
    id: 0,
    callStart: new Date(),
    status: "VIVO",
    active: true,
    open: true,
    origin: "El tablazo",
    poste: "12",
    comments: ["2 Heridos por una tractomula"],
    type: "AMBULANCIA",
    dispatched: new Date(),
    arrived: undefined
  },
  {
    id: 1,
    callStart: new Date(),
    status: "ESPERA",
    active: false,
    open: true,
    origin: "Soledad",
    poste: "21",
    comments: [""],
    type: "GRUA",
    dispatched: new Date(),
    arrived: new Date(Date.now()+3600000)
  },
  {
    id: 2,
    active: false,
    open: true,
    callStart: new Date(),
    status: "COLA",
    origin: "Las nieves KM 12",
    poste: "130",
    comments: ["2 Ladrones hurtaron una moto en el parador Las Colinas"],
    type: "POLICIA",
    dispatched: new Date(),
    arrived: undefined
  },
]

export default function calls(state = initialState, action) {
  switch (action.type) {
    case ADD_CALL:
      return [
        {
          ...state.call,
          id: state.reduce((maxId, call) => Math.max(call.id, maxId), -1) + 1,
          active: true,
          completed: false
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


    case COMPLETE_CALL:
      return state.map(call =>
        call.id === action.id ?
          { ...call, completed: !call.completed } :
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
