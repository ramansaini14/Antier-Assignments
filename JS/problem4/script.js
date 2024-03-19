function showvals()
{
    var per1 = parseInt(document.getElementById("p1").value);
    var per2=document.getElementById("p2").value;
    var per3=document.getElementById("p3").value;
    
    if(per1>per2 && per1>per3 && per2>per3)
            {
                var pergreat=per1+" " + per2 + " " + per3;
            }
    else if (per1>per2 && per1>per3 && per2<per3)
            {
                var pergreat=per1+" " + per3 + " " + per2;
            }

    else if(per2>per1 && per2>per3 && per1>per3)
            {
                var pergreat=per2+" " + per1 + " " + per3;
            }
    else if(per2>per1 && per2>per3 && per1<per3)
            {
                var pergreat=per2+" " + per3 + " " + per1;
            }
    
    else if(per3>per2 && per3>per1 && per1>per2)
            {
                var pergreat=per3+" " + per1 + " " + per2;
            }
    else if(per3>per2 && per3>per1 && per1<per2)
            {
                var pergreat=per3+" " + per2 + " " + per1;
            }
    else {
        console.log("Invalid Input");
    }

    document.getElementById("descOrder").value = pergreat;


}