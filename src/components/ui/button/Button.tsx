import React from "react";
import style from "./Button.less";

const Button: React.FC<{
  text?: string;
  onClick: () => void;
}> = ({ text, onClick }) => {
  return (
    <button className={style.button} onClick={onClick}>
      <span className={style.text}>{text}</span>
    </button>
  );
};

Button.defaultProps = {
  text: "Новая игра",
  onClick: () => {}
};

export default Button;
