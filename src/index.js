import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feeling = (state = '', action) => {
    if (action.type === "SET_FEELING") {
        return action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return '';
    }
    return state;
}
const storeInstance = createStore(
    // reducers go here
    combineReducers(
        {
            feeling
        }
    ),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
