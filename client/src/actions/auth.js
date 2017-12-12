import axios from 'axios';
import { push } from 'react-router-redux';

import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../constants/actions';
import { ROOT_URL, SIGN_IN } from '../constants/api';


export function signInUser(email, password) {
  return dispatch => {
    axios.post(ROOT_URL + SIGN_IN, { email, password })
      .then(response => {
        dispatch({type: AUTH_USER});
        
        const { token } = response.data;
        localStorage.setItem('token', token);
        
        dispatch(push('/records'));
      })
      .catch(() => dispatch(authError('Wrong email or password')));
  };
}

export function signOutUser() {
  localStorage.removeItem('token');
  
  return {
    type: UNAUTH_USER
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}