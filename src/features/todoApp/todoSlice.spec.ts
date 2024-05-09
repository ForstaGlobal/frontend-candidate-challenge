import todoReducer, {
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodo,
  TodoState,
} from './todoSlice';

describe('counter reducer', () => {
  const todoId = '1';
  const newTodoText = 'new todo';

  const initialState: TodoState = {
    todos: [],
  };
  const stateWithTodos: TodoState = {
    todos: [
      {
        id: todoId,
        text: 'todo',
        done: false,
      },
    ],
  };

  it('should handle initial state', () => {
    expect(todoReducer(undefined, { type: 'unknown' })).toEqual({
      todos: [],
    });
  });

  it('should handle add todo', () => {
    const actual = todoReducer(initialState, addTodo(newTodoText));
    expect(actual.todos.length).toEqual(1);
    expect(actual.todos[0].text).toEqual(newTodoText);
    expect(actual.todos[0].done).toBeFalsy();
  });
  it('should handle add todo at the beginning of the todos', () => {
    const actual = todoReducer(stateWithTodos, addTodo(newTodoText));
    expect(actual.todos.length).toEqual(2);
    expect(actual.todos[0].text).toEqual(newTodoText);
    expect(actual.todos[0].done).toBeFalsy();
  });

  it('should handle delete todo', () => {
    const actual = todoReducer(stateWithTodos, deleteTodo(todoId));
    expect(actual.todos.length).toEqual(0);
  });

  it('should handle edit todo', () => {
    const editedTodo = {
      id: todoId,
      text: newTodoText,
      done: false,
    };
    const actual = todoReducer(stateWithTodos, editTodo(editedTodo));
    expect(actual.todos.length).toEqual(1);
    expect(actual.todos[0].text).toEqual(newTodoText);
    expect(actual.todos[0].done).toBeFalsy();
  });

  it('should handle toggle todo', () => {
    const actual = todoReducer(stateWithTodos, toggleTodo(todoId));
    expect(actual.todos[0].done).toBeTruthy();
  });
});
