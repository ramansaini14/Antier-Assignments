function calculations()
{
    var p=document.getElementById("phy").value;
    var c=document.getElementById("chem").value;
    var m=document.getElementById("math").value;
    var total=parseInt(p)+parseInt(c)+parseInt(m);
    document.getElementById("totalMarks").value=total;
    var perc=(total/300)*100;
    document.getElementById("percentage").value=perc;
    var result=perc;
    if(result>=60)
    {
        document.getElementById("result-val").value="Grade A";
    }
    else if(result<60 && result>=30)
    {
        document.getElementById("result-val").value="Grade B";
    }
    else
    {
        document.getElementById("result-val").value="Fail";
    }
}
