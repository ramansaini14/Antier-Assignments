import React from "react";
import "./formStyle.css";

function FormLayout() {
    return (
        <div id="divv">
            <fieldset>
            <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg"><path d="m22 43c-4 5-15.5 2-17.8 13-2.2 6-2.2 25 9.8 23-1-15-2-22-2-22s1 14 2 21c9 4 24 4 35-1 0-8-1-13 0-18 0-5 0 19 0 19s6 2 8-5c3-10 5-24-9-28-9-1-7-2-8-2-2 0-18 0-18 0z" fill="#427794" stroke="#2a424f"/><path d="m23 38s1 3-1 5c3 4 11 8 18 0-1-2-1-2-1-5z" fill="#c29b82" stroke="#693311"/><path d="m31 42c-14 0-23.4-37.2 0-37.8 24-.1 13 37.8 0 37.8z" fill="#cda68e" stroke="#693311"/><path d="m17 26c-3-10-3-22.8 14-23.6 13 .7 18 12.6 13 23.6 0-5 1-7-1-10-4-1-10 0-15-5-1 4-13 2-11 15z" fill="#553932" stroke="#311710"/><path d="m45 65c5-8 0-25 3-31 3-10 7-16 16-16 10 0 16 8 20 17 1 2 0 6 2 11 1 4-1 8-1 10 0 5-1 3 2 9-5 13-34 10-42 0z" fill="#5f3e20" stroke="#311710"/><path d="m58 60c-5 5-18 3-20 13-2 6-1 25 11 24-1-16-3-23-3-23s2 15 3 21c9 5 23 5 35-1 0-6-1-13 0-18s0 20 0 20 7 1 9-6c2-9 4-22-7-25-9-3-10-5-12-5-1 0-16 0-16 0z" fill="#d8933b" stroke="#2a424f"/><path d="m58 54s1 3 0 7c3 3 10 8 16 0-1-4-1-4-1-7z" fill="#deb89f" stroke="#693311"/><path d="m66 59c-14 0-23-38 0-39 20 1 13 39 0 39z" fill="#dbbfa8" stroke="#693311"/><path d="m63 27c-3 5-7 8-12 9-4 1 2-17 13-17 5 0 13 3 15 15-6 1-14-5-16-7" fill="#5f3e20"/><path d="m18 70h18v24h-19z" fill="#ffeeac"/><path d="m27 48c-8 0-10 1-14 5s-3 13-3 13h-5.1v22c0 8 6.1 10 11.1 10h20c6 0 12-5 12-9v-23h-5s1-8-3-12c-3-4-6-6-13-6zm0 4c4 0 7 1 10 4 2 3 2 10 2 10h-25s0-8 2-10c2-3 6-4 11-4zm3 22c3 4-1 7-1 7l2 11h-10l3-11c-3-2-3-5-1-7s5-2 7 0z" fill="#222" stroke="#ffeeac"/></svg>
            <form action="/submit_login" method="post">
                {/* <label htmlFor="username" class="l1">Username:</label><br /> */}
                <input type="text" id="username" name="username" class="l1i" placeholder="USERNAME"/><br />
                {/* <label htmlFor="password" class="l2">Password:</label><br /> */}
                <input type="password" id="password" name="password" class="l2i" placeholder="PASSWORD" /><br />
                <input type="checkbox" id="showPass" onClick={func}></input>
                <label htmlFor="showPass" class="l2" > Show Password</label><br/>
                <input type="checkbox" id="remember" name="remember" class="l3" />
                <label htmlFor="remember" class="l2" > Remember me</label><br />
                <input type="submit" value="LOGIN" class="btn"/>
                <a href="/forgot_password" class="flink">Forgot password?</a>
            </form>
            </fieldset>
        </div>
    );
}

function func() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

export default FormLayout;