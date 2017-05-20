const visibilityFilter = (state = 'MOSTRAR_TODOS', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    case 'SET_DATE_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
