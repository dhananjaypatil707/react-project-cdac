import React from "react";
import ReactDOM from "react-dom";
/*
function showData(data) {
  return data.toUpperCase();
}
function Welcome() {
  return <h2>This is from component,{showData("hello")}</h2>;
}*/
const myname = "Dhananjay";
const element = <h2>Hello,{myname}</h2>;
ReactDOM.render(<element />, document.getElementById("root"));
