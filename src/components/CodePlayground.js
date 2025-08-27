import React from "react";

const CodePlayground = ({ handleAuthentication, isAuthenticated }) => {
    return (
        <>
            <div>
                Hi Welcome to Code PlayGround
            </div>
            <button onClick={handleAuthentication}>
                {isAuthenticated ? 'Logout' : 'Login'}
            </button>
        </>
    )
}

export default CodePlayground;