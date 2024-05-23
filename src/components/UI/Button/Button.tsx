import { PropsWithChildren } from "react";
import clsx from "clsx";

import buttonStyles from "./Button.module.scss";

type ButtonSize = "small" | "medium";
type ButtonVariant = "filled" | "transparent";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  size?: ButtonSize;
  variant?: ButtonVariant;
}

export const Button = ({
  size = "medium",
  variant = "filled",
  className,
  children,
  ...props
}: ButtonProps) => {
  const styles = clsx(
    buttonStyles.base,
    buttonStyles[size],
    buttonStyles[variant],
    className
  );

  return (
    <button {...props} className={styles} onClick={props.onClick} >
      {children}
    </button>
  );
};
