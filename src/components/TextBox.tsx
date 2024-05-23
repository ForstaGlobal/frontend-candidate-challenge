import Button, { BUTTON_THEMES } from "./Button";
import content from "../content/app.json";
import useTodoState from "../hooks/useTodoState";

const {
  text_box_content: { add, input_placeholder },
} = content;

const TextBox = () => {
  const { todo, handleOnChange, handleOnSubmit, errorMessage } = useTodoState();

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        placeholder={input_placeholder}
        onChange={handleOnChange}
        value={todo}
        data-testid="text-box-input"
      />
      <Button
        theme={BUTTON_THEMES.PRIMARY}
        text={add}
        testId="text-box-submit-btn"
      />
      {errorMessage && <span className="errorMessage">{errorMessage}</span>}
    </form>
  );
};

export default TextBox;
