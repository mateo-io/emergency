// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import calls from './calls';

const rootReducer = combineReducers({
  calls,
  router,
});

export default rootReducer;
