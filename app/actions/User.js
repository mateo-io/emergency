
//ADD MULTIPLE
export const addConcesion = (concesion) => ({ type: 'ADD_CONCESION', concesion });
export const addSegments = (segments) => ({ type: 'ADD_SEGMENTS', segments });

//INDIVIDIAL
export const addTramo = (tramo) => ({ type: 'ADD_TRAMO', tramo });
export const addSegmento = (segmento) => ({ type: 'ADD_SEGMENTO', segmento });


//LOGIN
export const setUser = (user) => ({ type: 'LOGIN', user });
export const logout = () => ({ type: 'LOGOUT' });
