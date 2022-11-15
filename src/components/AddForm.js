import React from "react";
// AddForm.js

function AddForm({ todo, onAddFormSubmit, onAddInputChange }){
    return (
      <form onSubmit={onAddFormSubmit}>
        <h2>Add Todo</h2>
        <label htmlFor="todo">Create todo: </label>
        <input
          name="todo"
          type="text"
          placeholder="Create new todo"
          value={todo}
          onChange={onAddInputChange}
        />
      </form>
    );
}

export default AddForm
