const initialState = {
  type: 'MOSTRAR_TODOS',
  initialDate: new Date(0),
  endDate: new Date()
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
    default:
      return state
  }
}
