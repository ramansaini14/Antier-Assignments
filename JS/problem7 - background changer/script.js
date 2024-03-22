var colorss=['red', 'green', 'blue'];
var i=0;

function startChanging()
{
    
    x=setInterval(colorChanger, 2000);

}
function colorChanger()
{
    document.bgColor=colorss[i];
    i++;
    if(i==3)
    {
        i=0;
    }
}
function stopChanging()
{
    clearInterval(x);
}