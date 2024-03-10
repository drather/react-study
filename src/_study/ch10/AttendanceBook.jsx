import React from "react";

const students = [
    {
        id: 1,
        name: "kks1"
    },
    {
        id: 2,
        name: "kks2"
    },
    {
        id: 3,
        name: "kks3"
    },
    {
        id: 4,
        name: "kks4"
    },
    {
        id: 5,
        name: "kks5"
    },
];

// key 없이 사용 -> chrome 개발자도구에서 warning
function AttendanceBookWithoutKey(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li> {student.name}</li>;
            })}
        </ul>
    );
}

// key 사용 -> warning X
function AttendanceBookWithKey(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}> {student.name}</li>;
            })}
        </ul>
    );
}

function AttendanceBookWithKeyFormattedString(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={`student.id-${student.id}`}> {student.name}</li>;
            })}
        </ul>
    );
}


function AttendanceBookWithKeyIndex(props) {
    return (
        <ul>
            {students.map((student, index) => {
                return <li key={index}> {student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBookWithKey; 
