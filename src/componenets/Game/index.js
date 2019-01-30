import React, {Component} from "react";

import "./index.css";
class Game extends Component {
  state = {
    indexX:[],
    indexY:[],
    turn :"X",
  };

    press = (e) => {
      console.log('sssss',e.target);
      if (e.target.value >=0 || e.target.value <=8) {
        e.innerText = this.state.turn;
      if (this.state.turn==="X") {
      this.setState({turn:"Y" });

      e.target.value=this.state.turn;
      // console.log(this.state.turn);
      this.setState({indexX:[...this.state.indexX, e.target.value]});
    }else {
      this.setState({turn:"X" });
          // console.log(this.state.turn);
      this.setState({indexY:[...this.state.indexY, e.target.value]});
    }
  }else {
    return;
  }
    };
  render(){

    return (
      <div>
      <div className="row">
        <div className="square">
          <input type="button" value="0" onClick={this.press}/>
        </div>
        <div className="square">
          <input type="button" value="1" onClick={this.press}/>
        </div>
        <div className="square">
          <input type="button" value="2" onClick={this.press}/>
        </div>
      </div>
      <div className="row">
        <div className="square">
          <input type="button" value="3" onClick={this.press}/>
        </div>
        <div className="square">
          <input type="button" value="4" onClick={this.press}/>
        </div>
        <div className="square">
          <input type="button" value="5" onClick={this.press}/>
        </div>
      </div>
      <div className="row">
        <div className="square">
          <input type="button" value="6" onClick={this.press}/>
        </div>
        <div className="square">
          <input type="button" value="7" onClick={this.press}/>
        </div>
        <div className="square">
          <input type="button" value="8" onClick={this.press}/>
        </div>
      </div>
      </div>
    );
  }
}

export default Game;
