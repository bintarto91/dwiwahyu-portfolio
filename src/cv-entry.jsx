import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CV from "./components/CV";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <CV />
  </StrictMode>
);