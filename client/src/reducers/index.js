import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as form } from 'redux-form';

import wizard from './wizard';

export default combineReducers({
  wizard,
  router,
  form
});