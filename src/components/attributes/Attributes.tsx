import React from "react";
import style from "./Attributes.less";

interface IProps {
  countSteps: number;
  onStartNewGame: () => void;
}

const Attributes: React.FC<IProps> = ({ countSteps, onStartNewGame }) => {
  return (
    <div className={style.attributes}>
      <div className={style.counter}>Кол-во ходов: {countSteps}</div>
      <button className={style.button} onClick={onStartNewGame}>
        <span className={style.text}>Новая игра</span>
      </button>
    </div>
  );
};

export default Attributes;
