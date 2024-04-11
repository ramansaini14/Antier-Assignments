function startChanging()
{
    imagess = ["image.png" , "image2.png"];
    i=0;
    storage=setInterval(changerImg, 1000);
}

function changerImg()
{
    document.body.style.background="url("+imagess[i]+")";
    i++;
    if(i==2)
    {
        i=0;
    }
}
function stopChanging()
{
    clearInterval(storage);
}