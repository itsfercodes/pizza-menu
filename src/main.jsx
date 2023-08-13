import React from 'react';
import ReactDOM from 'react-dom/client';
import Pizza from './Pizza';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <h1>Hello React!</h1>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </>
  </React.StrictMode>
);
