import { combineReducers } from 'redux';
import authReducer from './authReducer';
import miscReducer from './miscReducer';

const rootReducer = combineReducers({
  isAuthenticated: authReducer,
  misc: miscReducer,
});

export default rootReducer;
