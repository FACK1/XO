import React from "react";

import "./index.css";
const Game = props => {
  return (
    <div onClick={e => this.clicked(e.target)}>
      <div className="square" data-square="0" />
      <div className="square" data-square="1" />
      <div className="square" data-square="2" />

      <div className="square" data-square="3" />
      <div className="square" data-square="4" />
      <div className="square" data-square="5" />

      <div className="square" data-square="6" />
      <div className="square" data-square="7" />
      <div className="square" data-square="8" />
    </div>
  );
};

export default Game;
