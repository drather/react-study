import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './_study/ch03-jsx/Library'

import Clock from './_study/ ch04-rendering-elements/Clock'

import CommentList from './_study/ch05-components-props/CommentList'

import NotificationList from './_study/ch06-state-lifecycle/NotificationList'

import Accomodate from './_study/ch07-hooks/Accomodate'

import ConfirmButtonClass from './_study/ch08-handing-events/ConfirmButtonClass';
import ConfirmButtonFunction from './_study/ch08-handing-events/ConfirmButtonFunction'; 

import Toolbar from './_study/ch09-conditional-rendering/Toolbar';
import LandingPage from './_study/ch09-conditional-rendering/LandingPage';

import AttendanceBookWithoutKey from './_study/ch10-list-keys/AttendanceBook';
import AttendanceBookWithKey from './_study/ch10-list-keys/AttendanceBook';
import AttendanceBookWithKeyFormattedString from './_study/ch10-list-keys/AttendanceBook';
import AttendanceBookWithKeyIndex from './_study/ch10-list-keys/AttendanceBook';

import SignUp from './_study/ch11-forms/SignUp';

import Calculator from './_study/ch12-lifting-state-up/Calculator';

import ProfileCard from './_study/ch13-composition-inheritance/ProfileCard';

import KksCard from './_study/ch13-composition-inheritance/KksCard';

import DarkOrLight from './_study/ch14-context/DarkOrLight';

import Blocks from './_study/ch15-styling/Block';

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
