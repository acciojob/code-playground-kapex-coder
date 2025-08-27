import React from "react";

const Login = ({ handleAuthentication, isAuthenticated }) => {
    return (
        <>
            <p>{isAuthenticated ? "Log In" : "Log Out"}</p>
            <button onClick={handleAuthentication}>
                {isAuthenticated ? 'Logout' : 'Login'}
            </button>
        </>
    );
}

export default Login;