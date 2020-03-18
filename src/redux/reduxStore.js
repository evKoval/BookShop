import { combineReducers, compose, applyMiddleware, createStore } from "redux";
import bookShopReducer from "./bookShopReducer";
// import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

let reducers = combineReducers({
    bookShopPage: bookShopReducer
})

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(logger, sagaMiddleware)));

window._store_ = store;

export default store;