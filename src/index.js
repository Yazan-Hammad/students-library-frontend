import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NavigateProvider } from "./contexts/navigate";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NavigateProvider>
    <App />
  </NavigateProvider>
);
