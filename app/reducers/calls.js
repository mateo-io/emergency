import { ADD_CALL, DELETE_CALL, EDIT_CALL, COMPLETE_CALL, COMPLETE_ALL, CLEAR_COMPLETED }
from 'constants/CallActions'



const initialState = [
  {
    id: 0,
    callStart: new Date(),
    status: "VIVO",
    active: true,
    origin: "Poste 1 - El tablazo",
    comments: ["2 Heridos por una tractomula"],
    type: "AMBULANCE",
    dispatched: new Date(),
    arrived: undefined
  },
  {
    id: 1,
    callStart: new Date(),
    status: "ESPERA",
    active: true,
    origin: "Poste 34 - Soledad",
    comments: [""],
    type: "TOW",
    dispatched: new Date(),
    arrived: new Date(Date.now()+3600000)
  },
  {
    id: 2,
    active: true,
    callStart: undefined,
    status: "COLA",
    origin: "Poste 11 Las nieves",
    comments: ["2 Ladrones hurtaron una moto en el parador Las Colinas"],
    type: "POLICE",
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

    case EDIT_CALL:
      return state.map(call =>
        call.id === action.id ?
          { ...call,
            firstName: action.firstName,
            lastName: action.lastName,
            phone: action.phone,
            state: action.state,
            active: action.active,
            completed: false
          } :
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
