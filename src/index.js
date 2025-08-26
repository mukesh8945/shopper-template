import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import reportWebVitals from './reportWebVitals';
import ShoppingComponent from './components/ShoppingComponent';
<<<<<<< HEAD
import EventBinding from './components/EventBinding';
=======
>>>>>>> 94cf7eba66169026247bf1289840627c2a6426f8
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EventBinding />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
