export enum BUTTON_THEMES {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DANGER = "danger",
}

type ButtonThemeType = (typeof BUTTON_THEMES)[keyof typeof BUTTON_THEMES];

interface ButtonProps {
  theme: ButtonThemeType;
  text: string;
  onClick?: () => void;
  testId: string;
}

const Button = ({ theme, text, testId, onClick }: ButtonProps) => (
  <button className={theme} onClick={onClick} data-testid={testId}>
    {text}
  </button>
);

export default Button;
