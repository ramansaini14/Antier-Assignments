import React from "react";
import FormLayout from "./loginForm";

function isValid(email) {
    console.log(email);
    if (email === "admin@123") {
        return <FormLayout/>;
    } else {
        return alert("You are not allowed to access this page")
    }
}

export default isValid;