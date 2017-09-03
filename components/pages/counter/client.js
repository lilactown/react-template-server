import React from "react";
import { render } from "react-dom";
import CounterApp from "./app";

document.addEventListener("DOMContentLoaded", function onLoad() {
  render(<CounterApp />, document.getElementById("app"));
});
