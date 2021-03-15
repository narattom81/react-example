import React from "react";
import { connect } from "react-redux";

const GrandGrandChild = props => (
  <div className="grandchild-component">
    <div>This is the grand grandchild component</div>
    <div className="emp">Count: {props.name}</div>
    
  </div>
);

const mapStateToProps = state => ({
  name: state.name
});

export default connect(mapStateToProps)(GrandGrandChild)