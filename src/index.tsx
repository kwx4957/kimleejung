import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Dividend from './Dividend'
import Borad from './Board';
import Post from './Post';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <App />
    <Dividend/>
    <Borad/>
    {/* <Post/> */}
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
