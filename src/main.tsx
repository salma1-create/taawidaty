import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log('=== DawaCalc Starting ===');
console.log('1. main.tsx loaded');

const rootElement = document.getElementById("root");
console.log('2. Root element:', rootElement);

if (!rootElement) {
  console.error('ERROR: Root element not found!');
  document.body.innerHTML = '<div style="padding: 20px; font-family: sans-serif;"><h1>Error: Root element not found</h1><p>The #root div is missing from index.html</p></div>';
} else {
  try {
    console.log('3. Creating React root...');
    const root = createRoot(rootElement);
    console.log('4. Rendering App...');
    root.render(<App />);
    console.log('5. ✓ App rendered successfully');
  } catch (error) {
    console.error('ERROR rendering app:', error);
    rootElement.innerHTML = `<div style="padding: 20px; font-family: sans-serif;"><h1>Error Loading App</h1><pre>${error}</pre></div>`;
  }
}
