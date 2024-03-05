import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './ch03/Library'
import Clock from './ch04/Clock'

import CommentList from './ch05/CommentList'

import NotificationList from './ch06/NotificationList'

import Accomodate from './ch07/Accomodate'

import ConfirmButtonClass from './ch08/ConfirmButtonClass';
import ConfirmButtonFunction from './ch08/ConfirmButtonFunction'; 
import Toolbar from './ch09/Toolbar';
import LandingPage from './ch09/LandingPage';

// ch04
// setInterval(() => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }, 1000);


// ch05
// ReactDOM.render(
//   <React.StrictMode>
//     <CommentList />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

//ch06
// ReactDOM.render(
//   <React.StrictMode>
//     <NotificationList />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// ch07
// ReactDOM.render(
//   <React.StrictMode>
//     <Accomodate />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//ch08
// ReactDOM.render(
//   <React.StrictMode>
//     <ConfirmButtonClass />
//     <ConfirmButtonFunction />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

//ch09
ReactDOM.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
