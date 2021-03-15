import React, { Component } from "react";
import { connect } from "react-redux";

import Child from "./Child";

class Parent extends Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  }
  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  }
  render() {
    return (
      <div className="parent-component">
        <div>This is the parent component</div>
        <button onClick={this.increment}>Increment!!</button>
        <button onClick={this.decrement}>Decrement!!</button>
        <Child />
      </div>
    );
  }
}

export default connect(null)(Parent);