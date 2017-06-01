import {SET_BOTH_DATES}  from 'constants/CallActions'

const initialState = {
  type: 'MOSTRAR_TODOS',
  initialDate: new Date(0),
  endDate: new Date(Date.now()+86400000),
  durationInitial: 0,
  durationEnd: undefined,
  callDurationInitial: 0,
  callDurationEnd: undefined,
  numeroPoste: 'TODOS'
}

export default function visibilityFilter(state = initialState, action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return {
        ...state,
        type: action.filter
      }

    case 'SET_POSTE_FILTER':
      return {
        ...state,
        numeroPoste: action.filter
      }

    case 'SET_INITIAL_DATE':
      return {
        ...state,
        initialDate: action.date
      }
    case 'SET_FINAL_DATE':
      return {
        ...state,
        endDate: action.date
      }

    case SET_BOTH_DATES:
    console.log("SET BOTH DATES FIRED");
      return {
        ...state,
        initialDate: action.initialDate,
        endDate: action.endDate
      }

      case 'SET_DURATION_ALL':
      return {
        ...state,
        durationInitial: 0,
        durationEnd: undefined
      }

      case 'SET_DURATION_1':
      return {
        ...state,
        durationInitial: 0,
        durationEnd: 300
      }

      case 'SET_DURATION_2':
      return {
        ...state,
        durationInitial: 300,
        durationEnd: 1200
      }

      case 'SET_DURATION_3':
      return {
        ...state,
        durationInitial: 1200,
        durationEnd: 3600
      }

      case 'SET_DURATION_4':
      return {
        ...state,
        durationInitial: 3600,
        durationEnd: undefined
      }


      case 'SET_CALL_DURATION_ALL':
      return {
        ...state,
        callDurationInitial: 0,
        callDurationEnd: undefined
      }

      case 'SET_CALL_DURATION_1':
      return {
        ...state,
        callDurationInitial: 0,
        callDurationEnd: 30
      }

      case 'SET_CALL_DURATION_2':
      return {
        ...state,
        callDurationInitial: 0,
        callDurationEnd: 60
      }

      case 'SET_CALL_DURATION_3':
      return {
        ...state,
        callDurationInitial: 60,
        callDurationEnd: 180
      }

      case 'SET_CALL_DURATION_4':
      return {
        ...state,
        callDurationInitial: 180,
        callDurationEnd: undefined
      }

    case 'SET_TODAY':
      return {
        ...state,
        initialDate: new Date(),
        endDate: new Date(new Date()+86400000)
      }
    case 'SET_LAST_WEEK':
      return {
        ...state,
        endDate: action.date
      }
    case 'CLEAR_DATES':
      return {
        ...state,
        initialDate: new Date(0),
        endDate: new Date()
      }
    default:
      return state
  }
}
