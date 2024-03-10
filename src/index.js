import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './_study/ch03/Library'

import Clock from './_study/ch04/Clock'

import CommentList from './_study/ch05/CommentList'

import NotificationList from './_study/ch06/NotificationList'

import Accomodate from './_study/ch07/Accomodate'

import ConfirmButtonClass from './_study/ch08/ConfirmButtonClass';
import ConfirmButtonFunction from './_study/ch08/ConfirmButtonFunction'; 

import Toolbar from './_study/ch09/Toolbar';
import LandingPage from './_study/ch09/LandingPage';

import AttendanceBookWithoutKey from './_study/ch10/AttendanceBook';
import AttendanceBookWithKey from './_study/ch10/AttendanceBook';
import AttendanceBookWithKeyFormattedString from './_study/ch10/AttendanceBook';
import AttendanceBookWithKeyIndex from './_study/ch10/AttendanceBook';

import SignUp from './_study/ch11/SignUp';

import Calculator from './_study/ch12/Calculator';

import ProfileCard from './_study/ch13/ProfileCard';

import KksCard from './_study/ch13/KksCard';

import DarkOrLight from './_study/ch14/DarkOrLight';

import Blocks from './_study/ch15/Block';

// mini-blog
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)


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
// ReactDOM.render(
//   <React.StrictMode>
//     <DarkOrLight/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

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
