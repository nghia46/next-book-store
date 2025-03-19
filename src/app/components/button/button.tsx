import React from "react";
import style from "./button.module.css";
type ButtonProps = {
  text?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger" | "warning";
};

const CustomButton: React.FC<ButtonProps> = ({
  onClick,
  text = "click me!",
  variant = "primary",
}) => {
  return (
    <div className={`${style.button} ${style[`button--${variant}`]}`} onClick={onClick}>
      <p className={style.button__text}>{text}</p>
    </div>
  );
};

export default CustomButton;