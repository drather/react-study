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
import AttendanceBookWithoutKey from './ch10/AttendanceBook';
import AttendanceBookWithKey from './ch10/AttendanceBook';
import AttendanceBookWithKeyFormattedString from './ch10/AttendanceBook';
import AttendanceBookWithKeyIndex from './ch10/AttendanceBook';
import SignUp from './ch11/SignUp';
import Calculator from './ch12/Calculator';


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
// ReactDOM.render(
//   <React.StrictMode>
//     <LandingPage />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

//ch10
// ReactDOM.render(
//   <React.StrictMode>
//     <AttendanceBookWithoutKey/>
//     <AttendanceBookWithKey/>
//     <AttendanceBookWithKeyFormattedString/>
//     <AttendanceBookWithKeyIndex/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


//ch11
// ReactDOM.render(
//   <React.StrictMode>
//     <SignUp/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//ch12
ReactDOM.render(
  <React.StrictMode>
    <Calculator/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
