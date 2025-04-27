import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MystaLibProvider } from 'mysta-lib';

// Global styles
import './assets/css/main.css';
import 'mysta-lib/style.css';

// Preset
import { raijin } from 'mysta-presets';
import 'mysta-presets/raijin/style.css';

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <MystaLibProvider configOptions={{ preset: raijin }}>
        <App />
      </MystaLibProvider>
    </React.StrictMode>,
  );
}
