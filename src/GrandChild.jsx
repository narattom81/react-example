import React from "react";
import { connect } from "react-redux";
import GrandGrandChild from "./GrandGrandChild";

const GrandChild = props => (
  <div className="grandchild-component">
    <div>This is the grandchild component</div>
    <div className="emp">Count: {props.count}</div>
    <GrandGrandChild/>
  </div>
);

const mapStateToProps = state => ({
  count: state.count
});

export default connect(mapStateToProps)(GrandChild)