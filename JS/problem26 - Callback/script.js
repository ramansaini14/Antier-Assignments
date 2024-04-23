function show(result)
{
    document.getElementById("box").innerHTML=result;
}

function sum (a,b,myShow)
{
    ans=a+b;
    myShow(ans)
}

sum(5,5,show);