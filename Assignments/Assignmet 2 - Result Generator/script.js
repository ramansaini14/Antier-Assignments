function valcalc()
{
    var courseSel=document.getElementById("courseDpdn").value;
    if(courseSel=="BCA")
    {
        document.getElementById("durn").value="3 Years";
        document.getElementById("fees").value="40,000";
    }
    else if(courseSel=="MCA")
    {
        document.getElementById("durn").value="2 Years";
        document.getElementById("fees").value="70,000";
    }
    else if(courseSel=="PGDCA")
    {
        document.getElementById("durn").value="1 Year";
        document.getElementById("fees").value="20,000";
    }
    else if(courseSel=="BTech")
    {
        document.getElementById("durn").value="4 Years";
        document.getElementById("fees").value="1,00,000";
    } 
}