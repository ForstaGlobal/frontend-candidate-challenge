import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import content from "../content/app.json";
import { Todo, useTodos } from "../context/TodoListProvider";

const {
  error: { submission_error },
} = content;

const useTodoState = () => {
  const { addTodo, editTodo } = useTodos();
  const [todo, setTodo] = useState<string>("");
  const [editingTodo, setEditingTodo] = useState<Todo | undefined>();
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    if (errorMessage) {
      setErrorMessage(undefined);
    }

    setTodo(value);
  };

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!todo?.trim() || !todo) {
      setErrorMessage(submission_error);

      return;
    }

    addTodo(todo);
    setTodo("");
  };

  const handleOnEditSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!todo?.trim() || !todo) {
      setErrorMessage(submission_error);

      return;
    }

    if (!editingTodo) return;

    editTodo(editingTodo.id, todo);
    setEditingTodo(undefined);
  };

  const onEdit = (todo: any) => {
    setEditingTodo(todo);
  };

  const onCancelEdit = () => {
    if (errorMessage) setErrorMessage(undefined);
    setEditingTodo(undefined);
  };

  useEffect(() => {
    if (!editingTodo) return;

    setTodo(editingTodo.text);
  }, [editingTodo]);

  return {
    todo,
    handleOnChange,
    handleOnSubmit,
    handleOnEditSubmit,
    errorMessage,
    onEdit,
    onCancelEdit,
    editingTodo,
  };
};

export default useTodoState;
