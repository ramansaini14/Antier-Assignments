i=1;
function start()
{
    x=setInterval(counter,1000);
}

function stop()
{
    clearInterval(x);
}

function counter()
{
        document.getElementById("box").value=i;
        i++;
}
