import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";      // (1) Pull in any global or custom CSS
import App from "./App";   // (2) Import your main App component

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />               /* (3) Render your App component */
  </React.StrictMode>
);

