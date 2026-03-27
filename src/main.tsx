import { NuqsAdapter } from "nuqs/adapters/react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Layout from "./components/layout/Layout.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NuqsAdapter>
      <Layout>
        <App />
      </Layout>
    </NuqsAdapter>
  </StrictMode>
);