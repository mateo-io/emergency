// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import calls from './calls';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  calls,
  visibilityFilter,
  router,
});

export default rootReducer;
