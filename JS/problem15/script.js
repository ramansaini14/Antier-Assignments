function validateData()
{
    user = "raman";
    pass = "123";
    inUser = document.getElementById("username").value;
    inPass = document.getElementById("password").value;
    
    if(user==inUser && pass==inPass)
    {
        alert("the username and password matches");
    }
    else 
    {
        alert("username or password is invalid");
    }
}