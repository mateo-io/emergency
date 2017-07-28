const initialState = {
  id: 1,
  nombre: "Autopista",
  Tramos: [{id: 1, name: 'La lora'}],
  Segmentos: [{name: 'True one', prInicial: 13, prFinal: 25, id: 1, tramoId: 1}]
};

export default function concesion(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CONCESION':
      return {
        ...state,
        ...action.concesion
      };

    case 'REMOVE_TRAMO_FROM_ARRAY':
    return {
      ...state,
      Tramos: state.Tramos.filter(tramo =>
      tramo.id !== action.id
    )
  }




    case 'UPDATE_TRAMO_FROM_ARRAY':
      return state.Tramos.map(tramo =>
        tramo.id === action.id ?
        { ...tramo,
          ...action.tramo
        } :
        user
      )

    case 'REMOVE_SEGMENTO_FROM_ARRAY':
    return {
      ...state,
      Segmentos: state.Segmentos.filter(segmento =>
      segmento.id !== action.id
    )
  }



    case 'UPDATE_SEGMENTO_FROM_ARRAY':
      return {
        ...state,
        Segmentos: state.Segmentos.map(segmento =>
        segmento.id === action.id ?
          { ...segmento,
            ...action.segmento
          } :
          segmento
        )
      }


    case 'ADD_TRAMO':
      return {
        ...state,
        Tramos: [...state.Tramos, action.tramo]
      };

    case 'ADD_SEGMENTO':
      return {
        ...state,
        Segmentos: [...state.Segmentos, action.segmento]
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
