import React from "react";
import Button from "../ui/button/Button";
import style from "./WindowWinner.less";

interface IProps {
  countSteps: number;
  onClick: () => void;
}

const WindowWinner: React.FC<IProps> = ({ countSteps, onClick }) => {
  return (
    <div className={style.overlay}>
      <div className={style.win}>
        <span className={style.text}>Победа! Кол-во ходов: {countSteps}</span>
        <Button onClick={onClick} />
      </div>
    </div>
  );
};

export default WindowWinner;
