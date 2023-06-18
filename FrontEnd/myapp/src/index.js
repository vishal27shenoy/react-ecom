import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createContext, useContext } from "react";
const root = ReactDOM.createRoot(document.getElementById("root"));
export const DataContext = createContext(null);
root.render(
  <React.StrictMode>
    <DataContext.Provider value={{ order: [] }}>
      <App />
    </DataContext.Provider>
  </React.StrictMode>
);
reportWebVitals();
