import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as form } from 'redux-form';

import authReducer from './auth';


export default combineReducers({
  router,
  form,
  authReducer
});