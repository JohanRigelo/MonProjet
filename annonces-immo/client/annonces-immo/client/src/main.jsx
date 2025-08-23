import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
import "./index.css"; // Assuming you have a CSS file for global styles
import "./tailwind.css"; // Assuming you are using Tailwind CSS

import { BrowserRouter } from "react-router-dom";     