// React and helpers
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// Reducers
import authReducer from './authReducer';
import miscReducer from './miscReducer';
import userReducer from './userReducer';
import todosReducer from './todosReducer';

const persistConfig = { key: 'just-to-do-it', storage };

const rootReducer = combineReducers({
  isAuthenticated: authReducer,
  user: userReducer,
  todos: todosReducer,
  misc: miscReducer,
});

export default persistReducer(persistConfig, rootReducer);
