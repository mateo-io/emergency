const initialState = {
  id: 1,
  nombre: "Autopista",
  Tramos: [],
  Segmentos: []
};

export default function concesion(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CONCESION':
      return {
        ...state,
        ...action.concesion
      };

    case 'ADD_SEGMENTS':
      return {
        ...state,
        Segmentos: [...action.segments]
      };
    default:
      return state;
  }
}
