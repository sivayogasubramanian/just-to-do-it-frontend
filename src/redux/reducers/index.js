// React and helpers
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// Reducers
import authReducer from './authReducer';
import miscReducer from './miscReducer';
import userReducer from './userReducer';
import todosReducer from './todosReducer';
import herokuReducer from './herokuReducer';

const persistConfig = {
  key: 'just-to-do-it',
  blacklist: ['isHerokuDynoAwake'],
  storage,
};

const rootReducer = combineReducers({
  isHerokuDynoAwake: herokuReducer,
  isAuthenticated: authReducer,
  user: userReducer,
  todos: todosReducer,
  misc: miscReducer,
});

export default persistReducer(persistConfig, rootReducer);
