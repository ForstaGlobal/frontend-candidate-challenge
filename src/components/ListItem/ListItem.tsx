import { useState } from "react"
import clsx from "clsx";

import { RemoveButton } from "../RemoveButton/RemoveButton";
import { Textarea } from "../UI/Textarea/Textarea";

import styles from "./ListItem.module.scss";

type ItemProps = {
  id: string;
  text: string;
  completed?: boolean;

  updateText?: (itemId: string, text: string) => void;
  completeItem?: (itemId: string, complete: boolean) => void;
  deleteItem?: (itemId: string) => void;

  onItemHover?: (itemId: string) => void;
  onItemBlur?: (itemId: string) => void;

  className?: string;
};

enum Mode {
  Default  = 0,
  Editing  = 1,
  Deliting = 2,
}

export const ListItem = ({ 
  id,
  text, 
  completed,
  deleteItem, 
  completeItem, 
  updateText,
  onItemHover,
  onItemBlur,
  className,
}: ItemProps) => {
  const [mode, setMode] = useState<Mode>(Mode.Default);
  const [textValue, setTextValue] = useState(text);

  const handleInputChange = (value: string) => {
    setTextValue(value);
    updateText?.(id, value);
  };

  function onDelete(): void {
    setMode(Mode.Deliting);
    deleteItem?.(id);
  }

  const listClasses = clsx(
    styles.wrapper, 
    completed && styles.completed,
    mode === Mode.Editing && styles.editing,
    mode === Mode.Deliting && styles.deleting
  );

  return (
    <li 
      data-testid={`listItem-${id}`}
      className={clsx(listClasses, className)}
      onMouseEnter={() => onItemHover?.(id)}
      onMouseLeave={() => onItemBlur?.(id)}
    >
      { completeItem && (<input 
          className={styles.checkbox}
          type="checkbox" 
          checked={completed}
          onChange={() => completeItem(id, !completed)}
        />)
      }
      <Textarea 
        value={textValue}
        className={(styles.textarea)}
        readOnly={!updateText}
        onInputUpdate={handleInputChange}
        onFocus={() => updateText && setMode(Mode.Editing)}
        onBlur={() => setMode(Mode.Default)}
      />
      { deleteItem && <RemoveButton onRemove={onDelete} />}
    </li>
  );
};
