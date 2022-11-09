import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./rootSaga";
import rootReducer from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(watcherSaga);

export default store;
