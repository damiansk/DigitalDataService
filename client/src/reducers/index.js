import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as form } from 'redux-form';

import auth from './auth';
import records from './records';
import record from './record';
import files from './files';

export default combineReducers({
  router,
  form,
  auth,
  records,
  record,
  files
});