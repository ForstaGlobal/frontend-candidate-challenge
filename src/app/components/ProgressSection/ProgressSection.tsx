import {  useSelector } from "react-redux";
import ProgressCircle from "../ProgressCircle/ProgressCircle";
import { RootState } from "../../redux/store";
import { floor } from "lodash";

function ProgressSection() {
  const todos = useSelector((state: RootState) => state.todo.todos); 
  const completedTodos = todos.filter(todo => todo.completed).length;
  const incompletedTodos = todos.filter(todo => !todo.completed).length;
  const progress=  floor(completedTodos/ todos.length*100,2);   
  return (
    <div className="section">  
      <ProgressCircle value={progress} />
      {completedTodos=== todos.length ? <p>Great job! You have completed all your tasks.</p>:      
      <p>You have  {incompletedTodos} task to complete.</p> }
    </div>
  );
}

export default ProgressSection;
