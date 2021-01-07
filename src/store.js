// Redux and Redux-persist
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
// rootReducer
import rootReducer from './redux/reducers';
// Middleware
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

const middleware = [ReduxThunk];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);
