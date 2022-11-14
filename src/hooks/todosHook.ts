import { TodoActions } from "../enums/TodoEnums";
import { TodoAction, TodoState } from "../types/TodoTypes";
import { addTodo, deleteTodo, generateTodo, toggleDone, updateTodo } from "./helpers";

// Our reducer function that uses a switch statement to handle our actions
const useTodos = (state: TodoState, action: TodoAction) => {
  const { type, payload } = action;
  switch (type) {
    case TodoActions.ADD:
      let todos = state.todos;
      if(payload && typeof payload === 'string') {
        todos = addTodo(todos, generateTodo(payload));
      }
      return {
        ...state,
        todos: todos,
      };
    case TodoActions.UPDATE:
      let updatedTodos = state.todos;
      if(payload && typeof payload === 'object') {
        updatedTodos = updateTodo(updatedTodos, payload)
      }
      return {
        ...state,
        todos: updatedTodos,
      };
    case TodoActions.PATCH:
      let patchedTodos = state.todos;
      if(payload && typeof payload === 'string') {
        patchedTodos = toggleDone(patchedTodos, payload)
      }
      return {
        ...state,
        todos: patchedTodos,
      };
    case TodoActions.DELETE:
      let filteredTodos = state.todos;
      if(payload && typeof payload === 'string') {
        filteredTodos = deleteTodo(filteredTodos, payload);
      }
      return {
        ...state,
        todos: filteredTodos,
      };
    default:
      return state;
  }
}

export default useTodos;