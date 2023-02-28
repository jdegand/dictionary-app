import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { FontProvider } from "./context/FontContext";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <FontProvider>
        <App />
      </FontProvider>
    </ThemeProvider>
  </React.StrictMode>
);
