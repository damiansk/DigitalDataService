import { AUTH_USER, UNAUTH_USER } from '../constants/actions';


const initialState = {
  authenticated: false,
  message: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {...state, authenticated: true};
    case UNAUTH_USER:
      return {...state, authenticated: false};
    default:
      return state;
  }
};