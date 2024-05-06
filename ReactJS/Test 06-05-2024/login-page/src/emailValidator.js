import React from "react";


function successPageLoginForm() {
    return (
        <loginForm />
    );
}

function errorMessage() {
    return (alert("You are not authorised to view Page"));
}
function isValid(prop) {
    if (prop.email == "admin@123") {
        return <successPageLoginForm />
    }
    else {
        return <errorMessage />
    }
}

export default isValid;