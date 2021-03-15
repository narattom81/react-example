import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import "./style.css";

import Parent from "./Parent";

const initialState = {
  count: 0,
  hits: 0,
  name: "rishabh"
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {...state, count: state.count + 1,hits: state.hits + 1 ,name: "shaan"};
    case "DECREMENT":
      return {...state,count: state.count - 1,hits: state.hits + 1};
    case "RESET":
        return {...state,count: 0,hits: 0};  
    default:
      return {...state,
        count: state.count,
        hits: state.hits
      };
  }
}

const store = createStore(reducer);

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Parent />
      </Provider>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);