import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { CalendarProvider, TaskProvider } from './context';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TaskProvider>
      <CalendarProvider>
        <App />
      </CalendarProvider>
    </TaskProvider>
  </React.StrictMode>
);
