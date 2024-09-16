import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { BeforeMemo } from "./BeforeMemo/BeforeMemo";
import { MemoizationExamples } from "./Memoization/ExamplesMemo";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BeforeMemo />
    <MemoizationExamples />
  </StrictMode>
);
