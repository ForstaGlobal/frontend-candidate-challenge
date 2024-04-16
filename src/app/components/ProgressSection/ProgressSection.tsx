import { useSelector } from "react-redux";
import ProgressCircle from "../ProgressCircle/ProgressCircle";
import { RootState } from "../../redux/store";
import { floor } from "lodash";
import "./ProgressSection.scss";

function ProgressSection() {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const progress = floor((completedTodos / todos.length) * 100, 2);

  return (
    <div className="progress-section">
      <ProgressCircle value={progress} />
      <div>
        <span className="completed-msg">
          {completedTodos === todos.length ? (
            <p>Great job! You have completed all your tasks.</p>
          ) : (
            <p>
              You've completed {completedTodos} out of {todos.length} tasks. .
            </p>
          )}
        </span>
        <span className="progress-msg">
        {progress > 75 ? (
          <p>Almost there! </p>
        ) : progress > 50 ? (
          <p>You're halfway there! Keep it up! </p>
        ) : progress > 0 ? (
          <p>Keep going! You're doing great! </p>
        ) : (
          <p>No tasks completed yet. Keep going!</p>
        )}
        
        </span>
      </div>
    </div>
  );
}

export default ProgressSection;
