const initialState = [
];

export default function user(state = initialState, action) {
  switch (action.type) {

    case 'ADD_USER_TO_ARRAY':
    return [
      ...state,
      ...action.user
    ]

    case 'RECEIVE_USERS':
    return [
      ...action.usersList
    ]

    default:
      return state;
  }
}
