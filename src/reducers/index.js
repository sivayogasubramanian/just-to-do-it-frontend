import { combineReducers } from 'redux';
import authReducer from './authReducer';
import miscReducer from './miscReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  isAuthenticated: authReducer,
  user: userReducer,
  misc: miscReducer,
});

export default rootReducer;
