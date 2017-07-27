const initialState = [
];

export default function user(state = initialState, action) {
  switch (action.type) {

    case 'ADD_USER_TO_ARRAY':
    return [
      ...state,
      action.user
    ]


    case 'UPDATE_USER_ARRAY':
      console.log("Update usar array got called");
      return state.map(user =>
        user.id === action.id ?
        { ...user,
          ...action.user
        } :
        user
      )

    case 'RECEIVE_USERS':
    return [
      ...action.usersList
    ]

    default:
      return state;
  }
}
