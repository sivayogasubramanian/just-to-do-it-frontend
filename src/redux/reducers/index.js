import { combineReducers } from 'redux';
import authReducer from './authReducer';
import miscReducer from './miscReducer';
import userReducer from './userReducer';
import todosReducer from './todosReducer';

const rootReducer = combineReducers({
  isAuthenticated: authReducer,
  user: userReducer,
  todos: todosReducer,
  misc: miscReducer,
});

export default rootReducer;
