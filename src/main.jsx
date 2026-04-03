import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { FinanceProvider } from "./context/FinanceContext"; // ✅ import

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FinanceProvider> {/* ✅ THIS IS THE FIX */}
      <App />
    </FinanceProvider>
  </React.StrictMode>
);