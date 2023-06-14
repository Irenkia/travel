import React from "react";
import ReactDOM from "react-dom/client";
import {HashRouter } from "react-router-dom";
import App from "./App";
import "./services/i18n";
//import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <React.Suspense fallback="Loading...">
    <HashRouter>
      <App />
      </HashRouter>
    </React.Suspense>
  </React.StrictMode>
);
