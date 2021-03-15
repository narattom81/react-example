import React, {Component} from "react";
import Grandchild from "./GrandChild";
import { connect } from "react-redux";


class Child extends Component {
  hits = () => {
    this.props.dispatch({ type: "RESET" });
  }
  render() {
    return (
        <div className="child-component">
          <div>This is the child component</div>
          <button onClick={this.hits}>Reset Total Hits!!</button>
          <div> total hits: {this.props.hits}</div>
          <Grandchild />
        </div>
    );
  }

}
const mapStateToProps= state =>(
  {
    hits: state.hits
  }
);

export default connect(mapStateToProps)(Child);
