import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['navigation']
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export {store}
