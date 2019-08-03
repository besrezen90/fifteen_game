import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import style from "./App.less";
import { IGameData } from "../store/GameData";
import Field from "./field/Field";
import Attributes from "./attributes/Attributes";

interface IProps {
  gameData: IGameData;
}

interface IState {}

@inject("gameData")
@observer
export default class App extends Component<IProps, IState> {
  componentDidMount() {
    this.props.gameData.init();
  }

  render() {
    const { data, countSteps, init } = this.props.gameData;
    if (!data.length) return null;

    return (
      <div className={style.app}>
        <Field data={data} />
        <Attributes countSteps={countSteps} onStartNewGame={init} />
      </div>
    );
  }
}
