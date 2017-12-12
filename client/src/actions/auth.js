import axios from 'axios';
import { push } from 'react-router-redux';

import { AUTH_USER, UNAUTH_USER } from '../constants/actions';
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
      .catch(err => {
        dispatch({type: UNAUTH_USER});
      });
  };
}