import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "leaflet/dist/leaflet.css";

import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*  Toast Provider */}
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 3000,
        style: {
          fontSize: "14px",
          borderRadius: "8px",
        },
      }}
    />

    <App />
  </StrictMode>,
);
