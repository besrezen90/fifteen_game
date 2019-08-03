import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "mobx-react";
import { gameData } from "./store/GameData";

ReactDOM.render(
  <Provider gameData={gameData}>
    <App />
  </Provider>,
  document.getElementById("root")
);
