import { observable, action, computed } from "mobx";
import { shuffle } from "../util/util";

const INIT_DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];

export interface IGameData {
  countSteps: number;
  data: Array<number>;
  isWin: boolean;
  onStartNewGame: () => void;
  onShiftCell: (num: number, idx: number) => void;
}

class GameData implements IGameData {
  @observable countSteps: number = 0;
  @observable data: Array<number> = [];
  private readonly initialData: Array<number> = INIT_DATA;

  @computed
  get isWin() {
    return JSON.stringify(this.data) === JSON.stringify(this.initialData);
  }

  @action.bound
  private setData(arr: Array<number>) {
    this.data = arr;
  }

  @action
  onStartNewGame = () => {
    this.countSteps = 0;
    // this.setData(shuffle(this.initialData));
    this.setData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0, 15]);
  };

  private isTrueCell = (idx: number) => {
    return (
      (idx > 0 && this.data[idx - 1] === 0) ||
      (idx < this.data.length - 1 && this.data[idx + 1] === 0) ||
      (idx > 3 && this.data[idx - 4] === 0) ||
      (idx < this.data.length - 4 && this.data[idx + 4] === 0)
    );
  };

  @action
  onShiftCell = (num: number, idx: number) => {
    if (this.isTrueCell(idx)) {
      const emptyIndex = this.data.indexOf(0);
      const newData = [...this.data];
      newData[idx] = 0;
      newData[emptyIndex] = num;
      this.setData(newData);
      this.countSteps++;
    }
  };
}

export const gameData = new GameData();
