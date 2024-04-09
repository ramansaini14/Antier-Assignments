function leapChecker()
{
    num=document.getElementById("number").value;
    if(num%4==0)
    {
        alert("Leap Year");
    }
    else
    {
        alert("Not a leap Year");
    }

}