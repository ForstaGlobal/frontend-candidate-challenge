import { useSelector } from "react-redux";
import ProgressCircle from "../ProgressCircle/ProgressCircle";
import { RootState } from "../../redux/store";
import { floor } from "lodash";
import "./ProgressSection.scss"; 

function ProgressSection() {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const progress = floor((completedTodos / todos.length) * 100, 2);

  const progressMsg =
    progress === 100
      ? "Congratulations! You have completed all your tasks!"
      : progress > 75
      ? "Almost there!"
      : progress > 50
      ? "You're halfway there! Keep it up!"
      : progress > 0
      ? "Keep going! You're doing great!"
      : "No tasks completed yet. Keep going!";

  const completedMsg =
    completedTodos === todos.length
      ? "Great job!"
      : `You've completed ${completedTodos} out of ${todos.length} tasks.`;

  return (
    <div className="progress-section">
      <ProgressCircle value={progress} />
      <div>
        <span className="completed-msg">
          <p>{completedMsg}</p>
        </span>
        <span className="progress-msg">
          <p>{progressMsg}</p>
        </span>
      </div>
    </div>
  );
}

export default ProgressSection;
