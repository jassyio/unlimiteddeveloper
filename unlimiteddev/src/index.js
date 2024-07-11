// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeProvider from './theme'; // Adjust import based on your folder structure

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
