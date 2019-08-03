import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { IGameData } from "../store/GameData";
import Field from "./field/Field";
import Attributes from "./attributes/Attributes";
import WindowWinner from "./window-winner/WindowWinner";
import style from "./App.less";

interface IProps {
  gameData: IGameData;
}

@inject("gameData")
@observer
export default class App extends Component<IProps, {}> {
  componentDidMount() {
    this.props.gameData.onStartNewGame();
  }

  render() {
    const {
      data,
      countSteps,
      onStartNewGame,
      onShiftCell,
      isWin
    } = this.props.gameData;
    if (!data.length) return null;

    return (
      <div className={style.app}>
        <Field data={data} onShiftCell={onShiftCell} />
        <Attributes countSteps={countSteps} onStartNewGame={onStartNewGame} />
        {isWin && (
          <WindowWinner countSteps={countSteps} onClick={onStartNewGame} />
        )}
      </div>
    );
  }
}
