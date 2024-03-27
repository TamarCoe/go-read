import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';

import appReducers from './reducers/appReducers';
// import appMiddleware from 'redux/middlewares/app.middlewares'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(appReducers, composeEnhancers(applyMiddleware(
    // ...appMiddleware
)));
export default store;