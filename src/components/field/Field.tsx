import React from "react";
import style from "./Field.less";

interface IProps {
  data: Array<number>;
  onShiftCell: (num: number, idx: number) => void;
}

const Field: React.FC<IProps> = ({ data, onShiftCell }) => {
  const cells = data.map((cell, idx) => (
    <div
      onClick={() => onShiftCell(cell, idx)}
      className={cell === 0 ? `${style.cell} ${style.empty}` : style.cell}
      key={idx}
    >
      {cell !== 0 && cell}
    </div>
  ));
  return <div className={style.field}>{cells}</div>;
};

export default Field;
