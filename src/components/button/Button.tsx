import classNames from "classnames";
import { DOMAttributes } from "react";
// import "./style.css";
import style from "./style.module.css";
export type ButtonType = "button" | "submit" | "reset";

export interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
  className?: string;
  isDisabeled?: boolean;
  typeButton?: ButtonType;
  onClick?: (event: React.MouseEvent) => void;
}

export default function Button({
  className,
  children,
  isDisabeled,
  typeButton,
  onClick,
  ...rest
}: IButtonProps) {
  return (
    <button
      className={classNames(style.Button, className, {
        Button__disabeled: isDisabeled,
      })}
      disabled={isDisabeled}
      type={typeButton}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
