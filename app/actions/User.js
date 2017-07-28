
//ADD MULTIPLE
export const addConcesion = (concesion) => ({ type: 'ADD_CONCESION', concesion });
export const addSegments = (segments) => ({ type: 'ADD_SEGMENTS', segments });

//INDIVIDIAL
export const addTramo = (tramo) => ({ type: 'ADD_TRAMO', tramo });
export const addSegmento = (segmento) => ({ type: 'ADD_SEGMENTO', segmento });


//UPDATE DELETO
export const removeTramoFromArray = (id) => ({ type: 'REMOVE_SEGMENTO_FROM_ARRAY', id });
export const updateTramo = (id, tramo) => ({ type: 'UPDATE_TRAMO_FROM_ARRAY', id, tramo });

export const removeSegmentoFromArray = (id) => ({ type: 'REMOVE_SEGMENTO_FROM_ARRAY', id });
export const updateSegmento = (id, segmento) => ({ type: 'UPDATE_SEGMENTO_FROM_ARRAY', id, segmento });



//LOGIN
export const setUser = (user) => ({ type: 'LOGIN', user });
export const logout = () => ({ type: 'LOGOUT' });


// Multiple users
export function receiveUsers(json) {
  return {
    type: 'RECEIVE_USERS',
    usersList: json
  }
}

export function fetchUsers() {
  console.log("I'm fetching users")
  return dispatch => {
    return fetch(`http://localhost:3000/api/users`)
      .then(response => response.json())
      .then(json => {
        console.log("JSON", json)
        dispatch(receiveUsers(json))
    })
    .catch( err => {
      console.log("Error fetching users");
    })
  }
}

export const addUserToArray = (user) => ({ type: 'ADD_USER_TO_ARRAY', user });
export const removeUserFromArray = (id) => ({ type: 'REMOVE_USER_FROM_ARRAY', id });
export const updateUser = (id, user) => ({ type: 'UPDATE_USER_ARRAY', id, user });
