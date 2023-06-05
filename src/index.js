import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer
    position='top-right'
    autoClose={3000}
    pauseOnFocusLoss
    pauseOnHover
    theme='light'
    />

    <ToastContainer />
  </React.StrictMode>
);

reportWebVitals();
