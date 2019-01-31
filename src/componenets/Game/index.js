import React, {Component} from "react";
import EndPlay from "../EndPlay/index.js";

import "./index.css";
class Game extends Component {
  state = {
    turn :"X",
    game:Array(9).fill(''),
    endGame:0,
    winner:''
  };
    press = (e) => {
      if (this.state.game[e.dataset.value]=='') {

      this.state.game[e.dataset.value]=this.state.turn;
      e.innerText=this.state.turn;

      this.setState({
        turn: this.state.turn == 'X' ? 'O' : 'X',
        game:this.state.game
    });
  }
    var theWinner=this.win();
    if (theWinner=='X' || theWinner=='O') {
        this.setState({
          winner:theWinner,
          endGame:1});
    }
    };
    win = () => {
      var moves = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6], [0, 1, 2], [3, 4, 5], [6, 7, 8]];
      var game = this.state.game;
 for(let i=0;i<moves.length;i++) {
   if(game[moves[i][0]] == game[moves[i][1]] && game[moves[i][1]] == game[moves[i][2]])
       return game[moves[i][0]];
 }
    };

  render(){
    if (this.state.endGame==0) {
    return (
      <div>
          <div id="board" className="game" onClick={(e)=>this.press(e.target)}>

                  <div className="square" data-value="0"></div>
                  <div className="square" data-value="1"></div>
                  <div className="square" data-value="2"></div>

                  <div className="square row" data-value="3"></div>
                  <div className="square" data-value="4"></div>
                  <div className="square" data-value="5"></div>

                  <div className="square row" data-value="6"></div>
                  <div className="square" data-value="7"></div>
                  <div className="square" data-value="8"></div>

        </div>
      </div>)

    }else {
      return(
      <EndPlay  winner={this.state.winner}/>
)
    }

  }
}

export default Game;
