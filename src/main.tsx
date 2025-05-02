import React from 'react';
import ReactDOM from 'react-dom/client';
import { MystaLibProvider } from 'mysta-lib';
import { raijin } from 'mysta-presets';

import 'mysta-presets/raijin/style.css';
import './assets/css/main.css';
import 'mysta-lib/style.css';

import App from './App';

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
