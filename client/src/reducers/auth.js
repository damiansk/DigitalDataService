import {
  AUTH_USER_PENDING,
  AUTH_USER_SUCCESS,
  UNAUTH_USER,
  AUTH_USER_ERROR
} from '../constants/actions';


const initialState = {
  authenticated: false,
  isChecking: true,
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER_PENDING:
      return {...state, isChecking: true};
    case AUTH_USER_SUCCESS:
      return {...state, error: '', authenticated: true, isChecking: false};
    case AUTH_USER_ERROR:
      return {...state, error: action.payload, isChecking: false};
    case UNAUTH_USER:
      return {...state, authenticated: false, isChecking: false};
    default:
      return state;
  }
};