// React and helpers
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
// Reducers
import authReducer from './authReducer';
import miscReducer from './miscReducer';
import userReducer from './userReducer';
import todosReducer from './todosReducer';
import herokuReducer from './herokuReducer';
import searchReducer from './searchReducer';
import themeReducer from './themeReducer';

const persistConfig = {
  key: 'just-to-do-it',
  blacklist: ['isHerokuDynoAwake'],
  storage: storageSession,
};

const rootReducer = combineReducers({
  isHerokuDynoAwake: herokuReducer,
  isAuthenticated: authReducer,
  currentTheme: themeReducer,
  user: userReducer,
  todos: todosReducer,
  search: searchReducer,
  misc: miscReducer,
});

export default persistReducer(persistConfig, rootReducer);
