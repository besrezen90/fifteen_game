import React from "react";
import style from "./Attributes.less";
import Button from "../ui/button/Button";

interface IProps {
  countSteps: number;
  onStartNewGame: () => void;
}

const Attributes: React.FC<IProps> = ({ countSteps, onStartNewGame }) => {
  return (
    <div className={style.attributes}>
      <div className={style.counter}>Кол-во ходов: {countSteps}</div>
      <Button onClick={onStartNewGame} />
    </div>
  );
};

export default Attributes;
