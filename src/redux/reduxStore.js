import { combineReducers, compose, applyMiddleware, createStore } from "redux";
import bookShopReducer, { watchGetBooks } from "./bookShopReducer";
import cartReducer from "./bookShopReducer";
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

let reducers = combineReducers({
    bookShopPage: bookShopReducer,
    cartPage: cartReducer
})

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(logger, sagaMiddleware)));
sagaMiddleware.run(watchGetBooks)

window._store_ = store;

export default store;