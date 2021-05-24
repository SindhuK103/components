import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import Hooks from './Components/FunctionComponent';
import Employee from './Components/ClassComponent';
import Header from './Components/Header';
import StateClass from './Components/StateClass';
import ComponentD from './Components/Mounting';
import Updating1 from './Components/Updating';
import Parent from './Components/UnmountingClass1'

ReactDOM.render(
 // < Employee name="Raja" id={4}/>
  // <GetDerived NewSubject="Physics"/>,
  <React.StrictMode>
  <App />,
  </React.StrictMode>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
