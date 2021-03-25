import "bootstrap";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "./styles.scss";
const rootElement = document.getElementById("root");
if (navigator.userAgent === "ReactSnap") {
  rootElement.classList.add("ReactSnap");
} else {
  rootElement.classList.remove("ReactSnap");
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
