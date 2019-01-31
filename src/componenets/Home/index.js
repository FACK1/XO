import React, { Component } from "react";
import Header from "../Header/index.js";
import StartPlay from "../StartPlay/index.js";
import Game from "../Game/index.js";

class Home extends Component {
  state = {
    firstName: "",
    secondName: "",
    submitted: false,
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };
  startplay = e => {
    e.preventDefault();
    this.setState({ submitted: true });
  };


  render() {
    if (!this.state.submitted) {
      return (
        <StartPlay
          handleChange={this.handleChange}
          startplay={this.startplay}
        />
      );
    } else {
      return (
        <div>
          <Header
            firstName={this.state.firstName}
            secondName={this.state.secondName}
          />
          <Game />
        </div>
      );
    }
  }
}
export default Home;
