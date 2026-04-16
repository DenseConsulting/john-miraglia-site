import "./index.css";
import React from "react";
import { render } from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import { App } from "./App";

render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
  document.getElementById("root")
);
