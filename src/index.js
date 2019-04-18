import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import App from './components/app';
import {store, persistor} from './store';
import ErrorBoundry from './components/error-boundry';
import {HashRouter} from 'react-router-dom'

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <HashRouter>
                <PersistGate loading={null} persistor={persistor}>
                    <App/>
                </PersistGate>
            </HashRouter>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root'));
