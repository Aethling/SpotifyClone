// import { SET_TOKEN } from '../actions/tokenActions';

const initialState = {
  isLoggedIn: false,
  token: null,
  user: null,
  isTokenSuccess: false,
  isUserSuccess: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return { 
        ...state,
        token: action.token,
        isLoggedIn: true
      }
    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        user: action.user,
        isUserSuccess: true
      }
    case 'FETCH_USER_REQUESTED':
      return {
        ...state,
        isTokenSuccess: false
      }
    case 'FETCH_USER_ERROR':
      return {
        ...state,
        error: action.err
      }
    default: 
      return state
  }
}