
function sum()
{
    var a=document.getElementById("first").value;
    var b=document.getElementById("second").value;
    var c= parseInt(a) + parseInt(b);
    document.getElementById("result").value=c;

}

function subt()
{
    var a=document.getElementById("first").value;
    var b=document.getElementById("second").value;
    var c= parseInt(a) - parseInt(b);
    document.getElementById("result").value=c;
}

function mult()
{
    console.log("ok");
    var a=document.getElementById("first").value;
    var b=document.getElementById("second").value;
    var c= parseInt(a) * parseInt(b);
    document.getElementById("result").value=c;
}

function dev()
{   
    var a=document.getElementById("first").value;
    var b=document.getElementById("second").value;
    var c= parseInt(a) / parseInt(b);
    document.getElementById("result").value=c;
}