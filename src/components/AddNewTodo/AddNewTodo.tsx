import { useState } from "react";
import { useTodosContext } from "../TodoList/TodosContext";

import { simulate, ServerSimulationType } from "../../utils/serverSimulation";

import ServerSimulationController from "../ServerSimulationController/ServerSimulationController";
import { Button } from "../UI/Button/Button";
import { Loader } from "../Loader/Loader";

import styles from "./AddNewTodo.module.scss";

export default function AddNewTodo() {
  const [newTodo, setNewTodo] = useState("");
  const [loading, setLoading] = useState(false);
  const [simulationType, setSimulationType] = useState(ServerSimulationType.Normal);
 
  const { addNewTodoOnTop } = useTodosContext();

  const resetTodoState = () => {
    setNewTodo(""); 
    setLoading(false);
  };

  const addNewTodo = async (e: any, simulationType: ServerSimulationType) => {
    e.preventDefault();
    setLoading(true);

    try {
      await simulate(simulationType, () => addNewTodoOnTop(newTodo));
    } catch (error: any) {
      console.log("error");
    }

    resetTodoState();
  }

  return (
    <>
      <ServerSimulationController value={simulationType} onChange={setSimulationType}/>
      <form className={styles.form}>
        <input 
          data-testid="new-item-input"
          className={styles.input}
          placeholder="Type here..."
          value={newTodo}
          maxLength={550}
          onChange={e => setNewTodo(e.currentTarget.value)}
        />
        <Button
          data-testid="add-new-todo"
          disabled={loading}
          onClick={(e) => addNewTodo(e, simulationType)}
        >
          { loading ? <Loader /> : "Add +" }
        </Button>
      </form>
    </>
  );
}
