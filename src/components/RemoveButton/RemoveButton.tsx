import { Button } from "../UI/Button/Button";
import classes from "./RemoveButton.module.scss";

type RemoveButtonProps = {
  onRemove: () => void;
};

export const RemoveButton = ({
  onRemove 
}: RemoveButtonProps) => {
  return (
    <Button
      size="small"
      variant="transparent"
      className="removeBtn"
      onClick={onRemove}
    >
      <p className={classes.cross}>+</p>
    </Button>
  );
};
