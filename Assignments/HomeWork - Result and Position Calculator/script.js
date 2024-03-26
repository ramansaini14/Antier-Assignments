var count=1;

document.getElementById("theChanger").innerHTML="Student "+ count +" : ";

var max=0;
var avg=0;
var p=[];
var c=[];
var m=[];
var percentages=[];
function addRecord()
{
        count++;
        document.getElementById("theChanger").innerHTML="Student "+ count +" : ";
        p.push(document.getElementById("phy").value);
        c.push(document.getElementById("chem").value);
        m.push(document.getElementById("math").value);
        console.log(p);
        console.log(c);
        console.log(m);

    if(count==6)
    {
        document.getElementById("phy").disabled=true;
        document.getElementById("chem").disabled=true;
        document.getElementById("math").disabled=true;
        document.getElementById("addBtn").disabled=true;
        document.getElementById("theChanger").innerHTML="Record limit Exceeded";
    }
}

function calcPercentage()
{
    for (var i=0; i<p.length; i++)
    {   
        avg=((p[i]+c[i]+m[i])/300)*100;
        percentages.push(avg);
        
    }
    console.log(percentages);
    // for (var i=0; i<=4; i++)
    // {
    //     document.getElementById("showPer").innerHTML="<br><br>Percentage of Student " + i + " is : " + percentages[i];

    // }
    
}

function findToppers()
{
        percentages=percentages.sort(function (a,b) {return a-b;});
        console.log(percentages);
        
}