import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import App from "./components/App";

import './../src/i18n/index'

const container = document.getElementById("app");

ReactDOM.render(<App />, container);
