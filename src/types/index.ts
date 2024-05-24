export interface TodoItem {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface TodoState {
  todoList: TodoItem[];
  addTodoItem: (title: string) => void;
  removeTodoItem: (id: string) => void;
  updateStatus: (id: string) => void;
  updateTitle: (id: string, title: string) => void;
  clearTodo: () => void;
  setTodo: (todos: TodoItem[]) => void;
}
