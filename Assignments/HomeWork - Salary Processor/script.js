var arr=[]; 
var maxVal=0;
var sum=0;
var counter=1;
document.getElementById("res").disabled=true;
function valChanger()
{  

        arr.push(parseInt(document.getElementById("grabSal").value));
        document.getElementById("grabSal").value="";
        counter++;
        if(counter<=5)
        {
            document.getElementById("changer").innerHTML= "Enter salary of person " + counter + " : ";
        }
        else
        {
            document.getElementById("changer").innerHTML= "Limit Exceeded.";
        }
        console.log(arr);

        if(arr.length==5)
        {
            document.getElementById("gChanger").disabled=true;
            document.getElementById("grabSal").disabled=true;
            
        }

}
console.log(arr);

function sumSal()
{
    for (var i=0; i<=arr.length-1; i++)
    {
        sum=sum+arr[i];
    }
    document.getElementById("res").value=sum;
}
function maxValue()
{
    for (var i=0; i<=arr.length-1; i++)
    {
        if(arr[i]>maxVal)
        {
            maxVal=arr[i];
        }
    }
    document.getElementById("res").value=maxVal;
}
function minValue()
{   
    var minVal=arr[0];
    for (var i=0; i<=arr.length-1; i++)
    {
        if(arr[i]<minVal)
        {
            minVal=arr[i];
        }    
    }
    document.getElementById("res").value=minVal;
}
function dispAll()
{
    document.getElementById("res").value=arr;
}
function sortAll()
{
    arr=arr.sort(function(a, b){return a - b});
    document.getElementById("res").value=arr;
}