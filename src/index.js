import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './study/ch03/Library'
import Clock from './study/ch04/Clock'

import CommentList from './study/ch05/CommentList'

import NotificationList from './study/ch06/NotificationList'

import Accomodate from './study/ch07/Accomodate'

import ConfirmButtonClass from './study/ch08/ConfirmButtonClass';
import ConfirmButtonFunction from './study/ch08/ConfirmButtonFunction'; 
import Toolbar from './study/ch09/Toolbar';
import LandingPage from './study/ch09/LandingPage';
import AttendanceBookWithoutKey from './study/ch10/AttendanceBook';
import AttendanceBookWithKey from './study/ch10/AttendanceBook';
import AttendanceBookWithKeyFormattedString from './study/ch10/AttendanceBook';
import AttendanceBookWithKeyIndex from './study/ch10/AttendanceBook';
import SignUp from './study/ch11/SignUp';
import Calculator from './study/ch12/Calculator';
import ProfileCard from './study/ch13/ProfileCard';
import KksCard from './study/ch13/KksCard';
import DarkOrLight from './study/ch14/DarkOrLight';
import Blocks from './study/ch15/Block';

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
// ReactDOM.render(
//   <React.StrictMode>
//     <Calculator/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


//ch13
// ReactDOM.render(
//   <React.StrictMode>
//     <ProfileCard/>
//     <KksCard/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


//ch14
ReactDOM.render(
  <React.StrictMode>
    <DarkOrLight/>
  </React.StrictMode>,
  document.getElementById('root')
);

//ch15
// ReactDOM.render(
//   <React.StrictMode>
//     <Blocks/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
