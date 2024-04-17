import { AppState } from "../../../models/types";
import todosReducer, {
  initialState,
  addTodo,
  removeTodo,
  toggleTodo,
  showHidePopup,
  selectTodo,
  updateTodo,
  searchTodo,
  filterByCategory,
} from "../todosSlice";

describe("todosSlice reducers", () => {
  test("addTodo reducer", () => {
    const action = {
      type: addTodo.type,
      payload: { id: 1, task: "Task 1", completed: false },
    };
    const state = todosReducer(initialState, action);
    expect(state.todos).toHaveLength(1);
    expect(state.todos[0].id).toBe(1);
    expect(state.todos[0].task).toBe("Task 1");
    expect(state.todos[0].completed).toBeFalsy();
  });

  test("removeTodo reducer", () => {
    const initialStateWithTodo = {
      ...initialState,
      todos: [{ id: 1, task: "Task 1", completed: false }],
    } as AppState;
    const action = { type: removeTodo.type, payload: 1 };
    const state = todosReducer(initialStateWithTodo, action);
    expect(state.todos).toHaveLength(0);
  });

  test("toggleTodo reducer", () => {
    const initialStateWithTodo = {
      ...initialState,
      todos: [{ id: 1, task: "Task 1", completed: false }],
    } as AppState;
    const action = { type: toggleTodo.type, payload: 1 };
    const state = todosReducer(initialStateWithTodo, action);
    expect(state.todos[0].completed).toBeTruthy();
  });

  test("showHidePopup reducer", () => {
    const action = { type: showHidePopup.type };
    const state = todosReducer(initialState, action);
    expect(state.showPopup).toBeTruthy();
  });

  test("selectTodo reducer", () => {
    const initialStateWithTodo = {
      ...initialState,
      todos: [{ id: 1, task: "Task 1", completed: false }],
    } as AppState;
    const action = { type: selectTodo.type, payload: 1 };
    const state = todosReducer(initialStateWithTodo, action);
    expect(state.selectedTodo).toEqual({
      id: 1,
      task: "Task 1",
      completed: false,
    });
  });

  test("updateTodo reducer", () => {
    const initialStateWithTodo = {
      ...initialState,
      todos: [{ id: 1, task: "Task 1", completed: false }],
    } as AppState;
    const updatedTodo = { id: 1, task: "Updated Task 1", completed: true };
    const action = { type: updateTodo.type, payload: updatedTodo };
    const state = todosReducer(initialStateWithTodo, action);
    expect(state.todos[0].task).toBe("Updated Task 1");
    expect(state.todos[0].completed).toBeTruthy();
  });

  test("searchTodo reducer", () => {
    const action = { type: searchTodo.type, payload: "search query" };
    const state = todosReducer(initialState, action);
    expect(state.searchQuery).toBe("search query");
  });

  test("filter reducer", () => {
    const action = { type: filterByCategory.type, payload: "filter query" };
    const state = todosReducer(initialState, action);
    expect(state.filterCategory).toBe("filter query");
  });
});
