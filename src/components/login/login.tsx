import React from 'react';
import "./login.scss"

const Login = (props: any) => (
    <div className="Login">
        <label>Username</label>
        <input type="text" data-test="username"/>
        <button>Log in</button>
    </div>
);

export default Login;