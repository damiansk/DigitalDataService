import axios from 'axios';
import { push } from 'react-router-redux';

import { ROOT_URL, SIGN_IN } from '../constants/api';

export function signInUser(email, password) {
  return dispatch => {
    axios.post(ROOT_URL + SIGN_IN, { email, password })
      .then(data => {
        dispatch(push('/records'));
      })
      .catch(err => console.log(err));
  };
}