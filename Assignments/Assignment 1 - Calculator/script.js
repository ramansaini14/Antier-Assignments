function calculr(incoming)
{
    document.getElementById("txtbox").value+=incoming;

}
function resCalc()
{
    res=document.getElementById("txtbox").value;
    document.getElementById("txtbox").value=eval(res);
}
function cleanAll()
{
    document.getElementById("txtbox").value=0;
}
function deleteOne()
{
    totalstr=document.getElementById("txtbox").value;
    totalstr=totalstr.slice(0,-1);
    document.getElementById("txtbox").value=totalstr;
}