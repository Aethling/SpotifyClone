// import { SET_TOKEN } from '../actions/tokenActions';

const initialState = {
  isLoggedIn: false,
  token: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return { 
        ...state,
        token: action.token,
        isLoggedIn: true
      }
    default: 
      return state
  }
};