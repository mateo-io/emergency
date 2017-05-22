const initialState = {
  type: 'MOSTRAR_TODOS',
  initialDate: new Date(0),
  endDate: new Date(Date.now()+86400000)
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
