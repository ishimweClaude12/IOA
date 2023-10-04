import React from "react";

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 10 };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  handleDecrement() {
    this.setState((prev) => {
      return { count: prev.count - 1 };
    });
  }
  handleIncrement() {
    this.setState((prev) => {
      return { count: prev.count + 1 };
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default ClassCounter;
