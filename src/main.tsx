import "./polyfills/arraybuffer_base64/init.ts";
import "./polyfills/promise_withresolvers/init.ts";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App.tsx";
// import { default as App } from "./components/Test.mdx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </StrictMode>,
);
