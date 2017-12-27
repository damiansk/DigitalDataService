import axios from 'axios';
import { push } from 'react-router-redux';

import {
  AUTH_USER_PENDING,
  AUTH_USER_SUCCESS,
  UNAUTH_USER,
  AUTH_USER_ERROR
} from '../constants/actions';

import {
  API_AUTH_USER,
  API_SIGN_IN
} from '../constants/api';


export function signInUser(email, password, redirect) {
  return dispatch => {
    axios.post(API_SIGN_IN, { email, password })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        
        dispatch({
          type: AUTH_USER_SUCCESS,
          payload: response.data.user
        });
        dispatch(push(redirect));
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
    type: AUTH_USER_ERROR,
    payload: error
  }
}

export function authVerification() {
  return dispatch => {
    const token = localStorage.getItem('token');
  
    if(!token || token === '') {
      dispatch({type: UNAUTH_USER});
      return;
    }
  
    dispatch({type: AUTH_USER_PENDING});
    axios.post(API_AUTH_USER, null, {
        headers: {authorization: token}
      })
      .then(({data}) => {
        localStorage.setItem('token', data.token);
        dispatch({
          type: AUTH_USER_SUCCESS,
          payload: data.user
        });
      })
      .catch(() => signOutUser());
  }
}