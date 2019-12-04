const initialState = {
    currentUser: {},
    logged: "",
  }
  
export default function reducer(state = initialState, action) {
    switch (action.type) {
      case 'LOGIN_USER':
        return {...state, currentUser: action.payload, logged: action.logged}
      default:
        return state;
    }
  }