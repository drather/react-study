import React from "react";

function Clock(props) {
    return (
        <div>
            <h1>hi react</h1>
            <h1>current time: {new Date().toLocaleTimeString()}</h1>
        </div>
    );
}

export default Clock;