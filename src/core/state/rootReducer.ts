import { combineReducers } from "redux";
import todosReducer from "../../modules/todos/store/todosPageSlice";

const rootReducer = combineReducers({
  allTodos: todosReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
