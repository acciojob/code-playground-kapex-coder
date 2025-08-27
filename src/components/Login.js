import React from "react";

const Login = ({ handleAuthentication, isAuthenticated }) => {
    return (
        <>
            <p>Log In</p>
            <button onClick={handleAuthentication}>
                {isAuthenticated ? 'Log Out' : 'Log In'}
            </button>
        </>
    );
}

export default Login;