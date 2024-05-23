import { ChangeEvent, FormEvent } from "react";
import Button, { BUTTON_THEMES } from "./Button";
import content from "../content/app.json";

const {
  edit_text_box_content: { confirm, cancel },
} = content;

interface EditBoxProps {
  todo: string;
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleOnEditSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onCancelEdit: () => void;
  errorMessage: string | undefined;
}

const EditBox = ({
  todo,
  handleOnChange,
  handleOnEditSubmit,
  onCancelEdit,
  errorMessage,
}: EditBoxProps) => (
  <form onSubmit={handleOnEditSubmit}>
    <input
      value={todo}
      onChange={handleOnChange}
      data-testid="edit-box-input"
    />
    <div className="buttonContainer">
      <Button
        theme={BUTTON_THEMES.PRIMARY}
        text={confirm}
        testId="edit-box-edit-btn"
      />
      <Button
        theme={BUTTON_THEMES.SECONDARY}
        onClick={onCancelEdit}
        text={cancel}
        testId="edit-box-cancel-btn"
      />
    </div>
    {errorMessage && <span className="errorMessage">{errorMessage}</span>}
  </form>
);

export default EditBox;
