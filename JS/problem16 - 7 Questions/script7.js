function calcRes()
{
    num=document.getElementById("number").value;

    if(num>=70 && num<=100)
    {
        alert("First");
    }
    else if(num<=69 && num>=40)
    {
        alert("Second");
    }
    else if(num<=39 && num>20)
    {
        alert("Third");
    }
    else{
        alert("Fail");
    }
}