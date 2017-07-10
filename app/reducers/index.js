// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import calls from './calls';
import visibilityFilter from './visibilityFilter';
import user from './user';

const rootReducer = combineReducers({
  calls,
  visibilityFilter,
  user,
  router,
});

export default rootReducer;
