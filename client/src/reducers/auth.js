import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from '../constants/actions';


const initialState = {
  authenticated: false,
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {...state, authenticated: true};
    case UNAUTH_USER:
      return {...state, authenticated: false};
    case AUTH_ERROR:
      return {...state, error: action.payload};
    default:
      return state;
  }
};