import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk';

import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['navigation']
};

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));
let persistor = persistStore(store);

export {store, persistor}
