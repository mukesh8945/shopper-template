import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import reportWebVitals from './reportWebVitals';
import FormikDemo from './components/FormikDemo';
import FormikValidations from './components/FormikValidations';
import YupValidation from './components/YupValidation';
import YupvalidationComponent from './components/YupvalidationComponent';
import LifecycleDemo from './components/LifecycleDemo';
import ReactHookDemo from './components/ReactHookDemo';
import ReactHookContext from './components/ReactHookContext';
import { CookiesProvider } from 'react-cookie';
import UserLogin from './components/UserLogin';
import ReducerDemo from './components/ReducerDemo';
<<<<<<< HEAD
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReducerDemo />
=======
import CustomHooks from './components/CustomHooks';
import JQueryAjax from './components/JQueryAjax';
import ShoppingIndex from './shopping/ShoppingIndex';
import SPARoute from './components/SPARoute';
import Index from './i-shop/Index';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index />
>>>>>>> 2cb70de (new data)
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
