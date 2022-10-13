import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirstApp title="Hola, Soy Denji" subTitle={23} />
  </React.StrictMode>
);
