// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import calls from './calls';
import visibilityFilter from './visibilityFilter';
import user from './user';
import userList from './userList';
import concesion from './concesion';

const rootReducer = combineReducers({
  calls,
  visibilityFilter,
  user,
  userList,
  router,
  concesion,
});

export default rootReducer;
