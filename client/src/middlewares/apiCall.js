import axios from 'axios';

import { API_CALL, UNAUTH_USER } from '../constants/actions';

export default ({dispatch}) => next => action => {
  if(!action[API_CALL]) {
    return next(action);
  }
  
  const token = localStorage.getItem('token');

  if(!token || token === '') {
    return dispatch({type: UNAUTH_USER});
  }

  const {
    endpoint,
    method,
    types,
    params,
    responseType,
    headers,
    data,
    callback
  } = action[API_CALL];
  
  dispatch({type: types.pending});
  axios({
    method: method || 'get',
    url: endpoint,
    responseType: responseType || 'json',
    headers: {
      authorization: token,
      ...headers
    },
    params,
    data: data || undefined
  })
  .then(response => {
    dispatch({
      type: types.success,
      payload: response,
    });
    if(typeof callback === 'function') callback();
  })
  .catch(() => dispatch({
    type: types.error,
    //TODO Fetch error message from response
    // payload: response.data
  }));
  
};