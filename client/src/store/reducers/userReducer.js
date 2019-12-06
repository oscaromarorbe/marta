const initialState = {
    currentUser: {},
    logged: false,
    created: false,
  }
  
export default function reducer(state = initialState, action) {
    switch (action.type) {
      case 'LOGIN_USER':
        return {...state, currentUser: action.payload, logged: action.logged, created: action.created}
      case 'CREATE_USER':
        return {...state, currentUser: action.payload, logged: action.logged, created: action.created}
      default:
        return state;
    }
  }