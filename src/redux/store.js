import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducers';
import {persistStore, persistReducer, createTransform} from 'redux-persist';
//import logger from 'redux-logger';

import SQLiteStorage from 'redux-persist-sqlite-storage';
import SQLite from 'react-native-sqlite-storage';

const config = {
  name: 'enc123',
  location: 'default',
};

const storeEngine = SQLiteStorage(SQLite, config);

const persistConfig = {
  timeout: 0, //To make chrome debugger work on windows.
  key: 'root',
  storage: storeEngine,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = applyMiddleware(thunk);

export const store = createStore(persistedReducer, middleware);

export const persistor = persistStore(store);
