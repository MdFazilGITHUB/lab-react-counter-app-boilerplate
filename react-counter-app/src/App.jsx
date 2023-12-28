import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  inc = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  dec = () => {
    if (this.state.count > 0) {
      this.setState((prevState) => ({
        count: prevState.count - 1,
      }));
    }
  };
  reset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.inc}>Increase</button>
        <button onClick={this.dec}>Deacrease</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
