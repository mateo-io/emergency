const initialState2 = {}
const initialState = {
  cedula: "1053834884",
  name: "Mateo Mejia",
  isAdmin: "true",
  id: 1,
  concesionId: 1,
  password: 123456
};

export default function user(state = initialState, action) {
  switch (action.type) {

    case 'LOGIN':
      return {
        ...state,
        ...action.user
      };

    case 'LOGOUT':
      console.log("CALLED LOGOUT REAL");
      return Object.assign(state, initialState);

    default:
      return state;
  }
}
