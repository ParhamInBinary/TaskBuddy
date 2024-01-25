import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';
import { TaskProvider } from './context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>
);
