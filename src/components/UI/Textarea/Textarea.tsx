import { useEffect, useRef } from "react";

import styles from "./Textarea.module.scss";
import clsx from "clsx";

const maxLength = 550;
const rowsToDisplayCount = 1;

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  onInputUpdate: (value: string) => void;
}

export const Textarea = ({ value, onInputUpdate, ...props}: TextareaProps) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => autoUpdateTextareaHeight(ref.current), []);

  const handleTodoChange = () => {
    const element = ref.current;

    if (!element) {
      return;
    }

    autoUpdateTextareaHeight(element);
    onInputUpdate(element.value);
  };

  return (
    <textarea
      {...props}
      rows={rowsToDisplayCount}
      ref={ref}
      className={clsx(styles.textarea, props.className)}
      value={value}
      spellCheck={false}
      maxLength={maxLength}
      onChange={handleTodoChange}
    />
  );
};

function autoUpdateTextareaHeight(element: HTMLTextAreaElement | null): void {
  if (element) {
    element.style.height = "auto";
    element.style.height = element.scrollHeight + "px";
  }
}
