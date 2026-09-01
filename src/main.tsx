import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

/**
 * main.tsx
 * ============================================================================
 * Punto de entrada principal de React en el navegador.
 * Busca el elemento '#root' en index.html y renderiza la aplicación con StrictMode.
 * ============================================================================
 */
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
