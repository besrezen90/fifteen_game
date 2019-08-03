import { observable, action, computed } from "mobx";
import { shuffle } from "../util/util";

export interface IGameData {
  countSteps: number;
  data: Array<number>;
  init: () => void;
}

class GameData implements IGameData {
  @observable countSteps: number = 0;
  @observable data: Array<number> = [];
  private readonly initialData: Array<number> = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    0
  ];

  @action.bound
  private setData(arr: Array<number>) {
    this.countSteps = 0;
    this.data = arr;
  }

  init = () => {
    this.setData(shuffle(this.initialData));
  };
}

export const gameData = new GameData();
