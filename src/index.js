import React from "react";
import ReactDOM from "react-dom";

function showData(a) {
  return a.toUpperCase();
}

const myname = "Dhananjay";
const element = <h2>Hello{showData(myname)}</h2>;
ReactDOM.render(<App />, document.getElementById("root"));
