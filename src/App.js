import React from 'react'
import { useEffect, useState } from "react";
import TodoItem from './components/TodoItem';
import AddForm from "./components/AddForm"
import EditForm from "./components/EditForm"
import "./App.css";
import "./styles.css"


function App() {

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [todo, setTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});




  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

 const handleAddInputChange = e => {
    setTodo(e.target.value);
  }

  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
    console.log(currentTodo);
  }

  function handleAddFormSubmit(e) {
    e.preventDefault();

    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: new Date(),
          text: todo.trim()
        }
      ]);
    }

    setTodo("");
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();

    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }

  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  }

  function handleEditClick(todo) {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  }

  return (
    <div className="App">
      
      {isEditing ? (
        <EditForm
          currentTodo={currentTodo}
          setIsEditing={setIsEditing}
          onEditInputChange={handleEditInputChange}
          onEditFormSubmit={handleEditFormSubmit}
        />
      ) : (
        <AddForm
          todo={todo}
          onAddInputChange={handleAddInputChange}
          onAddFormSubmit={handleAddFormSubmit}
        />
      )}

      <ul className={`todo-list`}>
        {todos.map((todo, idx) => (
          <TodoItem
            todo={todo}
            key={idx}
            onEditClick={handleEditClick}
            onDeleteClick={handleDeleteClick}
          
            
          />
        ))
        .reverse()}
      </ul>
      <span>Click Text To Toggle Complete</span>
      <div className="forsta-logo"></div>
    </div>
  );
}

export default App;