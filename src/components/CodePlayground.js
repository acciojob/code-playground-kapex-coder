import React from "react";

const CodePlayground = ({ handleAuthentication, isAuthenticated }) => {
    return (
        <>
            <div>
                Hi Welcome to Code PlayGround
            </div>
            <button onClick={handleAuthentication}>
                Log Out
            </button>
        </>
    )
}

export default CodePlayground;