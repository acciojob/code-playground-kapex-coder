import React from "react";

const Login = ({ handleAuthentication, isAuthenticated }) => {
    return (
        <>
            <p>Login</p>
            <button onClick={handleAuthentication}>
                {isAuthenticated ? 'Logout' : 'Login'}
            </button>
        </>
    );
}

export default Login;