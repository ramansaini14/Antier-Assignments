import React from "react";

function FormLayout() {
    return (
        <div>
            <h2>Login Form</h2>
            <form action="/submit_login" method="post">
                <label htmlFor="username">Username:</label><br />
                <input type="text" id="username" name="username" /><br />
                <label htmlFor="password">Password:</label><br />
                <input type="password" id="password" name="password" /><br />
                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember"> Remember me</label><br />
                <input type="submit" value="LOGIN" />
                <a href="/forgot_password">Forgot password?</a>
            </form>
        </div>
    );
}

export default FormLayout;