import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as form } from 'redux-form';

import auth from './auth';
import records from './records';

export default combineReducers({
  router,
  form,
  auth,
  records
});