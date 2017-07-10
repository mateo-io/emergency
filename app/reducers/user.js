const initialState = {
  username: null,
  email: null,
  id: null,
  password: null
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
