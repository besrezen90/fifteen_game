import React from "react";
import style from "./Field.less";

interface IProps {
  data: Array<number>;
}

const Field: React.FC<IProps> = ({ data }) => {
  console.log(data);
  return <div className={style.field} />;
};

export default Field;
