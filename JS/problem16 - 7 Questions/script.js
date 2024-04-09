function posNeg()
{
    tempNum = document.getElementById("number").value;
    if(tempNum>0)
    {
        alert("Number is positive");
    }
    else if(tempNum<0)
    {
        alert("Number is negative");
    }
    else 
    {
        alert("Number is zero");
    }
}