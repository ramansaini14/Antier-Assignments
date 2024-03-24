let i=1;
let j=0;
function startWatch()
{
    x=setInterval(increaser, 1000);
}

function increaser()
{
    document.getElementById("milS").value = i;
    i++;
    if(i==11)
    {
        j++;
        i=1;
        document.getElementById("minS").value = j;
    }
}

function stopWatch()
{
    clearInterval(x);
}