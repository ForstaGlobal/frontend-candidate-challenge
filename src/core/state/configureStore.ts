import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./rootSaga";
import todosReducer from "../../modules/todos/store/todosPageSlice";
const reducer = combineReducers({
  allTodos: todosReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  {},
  composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(watcherSaga);

export default store;
