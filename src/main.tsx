import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";

import { GlobalReset } from "./Styles/StyleReset";
import { StyleGlobal } from "./Styles/StyleGlobal";
import { StyledAnimations } from "./Styles/StyleAnimations";
import { GlobalProvider } from "./contexts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalProvider>
      <GlobalReset />
      <StyleGlobal />
      <StyledAnimations />
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
