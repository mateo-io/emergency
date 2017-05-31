import {SET_BOTH_DATES}  from 'constants/CallActions'

const initialState = {
  type: 'MOSTRAR_TODOS',
  initialDate: new Date(0),
  endDate: new Date(Date.now()+86400000),
  durationInitial: 0,
  durationEnd: undefined,
  callDurationInitial: 0,
  callDurationEnd: undefined
}

export default function visibilityFilter(state = initialState, action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return {
        ...state,
        type: action.filter
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
      console.log("Reducer duration 1 called")
      return {
        ...state,
        durationInitial: 0,
        durationEnd: 30
      }

      case 'SET_DURATION_2':
      return {
        ...state,
        durationInitial: 0,
        durationEnd: 60
      }

      case 'SET_DURATION_3':
      return {
        ...state,
        durationInitial: 60,
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
