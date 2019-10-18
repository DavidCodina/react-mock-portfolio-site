import React             from 'react';
import ReactDOM          from 'react-dom';

//Converted from BrowserRouter to HashRouter for github...
import { HashRouter } from 'react-router-dom';
import App               from './App';
import './styles/style.css';
import "bootstrap/dist/css/bootstrap.min.css";

//This is no longer being used...
//import "bootstrap/dist/js/bootstrap.bundle.min.js";


ReactDOM.render(
  <HashRouter><App /></HashRouter>,
  document.getElementById('root')
);
