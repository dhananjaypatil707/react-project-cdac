import React from "react";
import ReactDOM from "react-dom";

function showData(data) {
  return data.toUpperCase();
}

const myname = "Dhananjay";
const element = <h2>Hello,{showData(myname)}</h2>;
ReactDOM.render(<showData />, document.getElementById("root"));
