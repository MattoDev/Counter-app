import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./HelloWorldApp";
import { App2 } from "./FirstApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>
);
