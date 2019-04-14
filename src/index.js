import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app';
import store from './store';
import ErrorBoundry from './components/error-boundry';

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <App/>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root'));
