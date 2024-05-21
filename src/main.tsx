import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/css/global.css";

ReactDOM.createRoot(document.getElementById("everything")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
