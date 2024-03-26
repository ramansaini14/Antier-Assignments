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
        p.push(parseFloat((document.getElementById("phy").value)));
        c.push(parseFloat((document.getElementById("chem").value)));
        m.push(parseFloat((document.getElementById("math").value)));
        document.getElementById("addedShow").innerHTML = "YOU ADDED : " + "Physics : " + document.getElementById("phy").value + " Chemistry : " + document.getElementById("chem").value + " Maths : "+ document.getElementById("math").value;

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
        document.getElementById("showPer"+i).innerHTML="Percentage of Student " + i + " is : " + percentages[0] + " , " + percentages[1] + " , " + percentages[2] + " , " + + percentages[3] + " , " + percentages[4];
    
}

function findToppers()
{
        percentages=percentages.sort(function (a,b) {return a-b;});
        
        if(percentages[4] === percentages[3])
        {
            document.getElementById("toppers").innerHTML="The Toppers are : " + " <br> " + "First and Second both are Topper with Percentage " + percentages[4] + " <br> " + " Second Topper with Percentage " + percentages[2] + " <br> " +" Third Topper with Percentage " + percentages[1] + " <br> ";
        }
        else if(percentages[3] === percentages[2])
        {
            document.getElementById("toppers").innerHTML="The Toppers are : " + " <br> " + "First Topper with Percentage " + percentages[4] + " <br> " + " Second and Third both are Topper with Percentage " + percentages[3] + " <br> " +" Third Topper with Percentage " + percentages[1] + " <br> ";
        }
        else if(percentages[2] === percentages[1])
        {
            document.getElementById("toppers").innerHTML="The Toppers are : " + " <br> " + "First Topper with Percentage " + percentages[4] + " <br> " + " Second Topper with Percentage " + percentages[3] + " <br> " +" Two Third Toppers with Percentage " + percentages[2] + " <br> ";
        }
        else
        {
            document.getElementById("toppers").innerHTML="The Toppers are : " + " <br> " + "First Topper with Percentage " + percentages[4] + " <br> " + " Second Topper with Percentage " + percentages[3] + " <br> " +" Third Topper with Percentage " + percentages[2] + " <br> ";
        }

}