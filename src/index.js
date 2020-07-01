import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  serviceWorker.unregister();
  // dev code
} else {
  // production code
  serviceWorker.register();
}
