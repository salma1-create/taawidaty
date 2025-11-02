import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const isDev = import.meta.env.DEV;

if (isDev) {
  console.log("=== TAAWIDATY App Starting ===");
  console.log("main.tsx loaded");
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("ERROR: Root element not found!");
  document.body.innerHTML = '<div style="padding: 20px; font-family: sans-serif;"><h1>Error: Root element not found</h1><p>The #root div is missing from index.html</p></div>';
} else {
  try {
    if (isDev) {
      console.log("Creating React root...");
    }
    const root = createRoot(rootElement);
    if (isDev) {
      console.log("Rendering App component");
    }
    root.render(<App />);
    if (isDev) {
      console.log("✓ App rendered successfully");
    }
  } catch (error) {
    console.error("ERROR rendering app:", error);
    rootElement.innerHTML = `<div style="padding: 20px; font-family: sans-serif;"><h1>Error Loading App</h1><pre>${error}</pre></div>`;
  }
}
