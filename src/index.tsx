import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter } from 'react-router-dom';

library.add(fas);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode> */}
  </BrowserRouter>
);
reportWebVitals();
