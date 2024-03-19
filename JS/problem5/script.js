function calcBill()
{
    var p=document.getElementById("paprod").value;
    var q=document.getElementById("qaprod").value;
    var totalBill=parseInt(p)*parseInt(q);
    document.getElementById("bbprod").value=totalBill;
    
    if(totalBill<=99999 && totalBill>=1999)
    {
        var discount=(totalBill*10)/100;
    }
    else if(totalBill<=2000 && totalBill>=999)
    {
        var discount=(totalBill*5)/100;
    }
    else if(totalBill<=1000 && totalBill>=0)
    {
        var discount=(totalBill*2)/100;
    }
    else if(totalBill>=100000)
    {
        alert("Bill amount is too high, discount amount exceeded");   
    }
    document.getElementById("dbprod").value=discount;
    if(discount>1200)
    {
        alert("Bill amount is too high, discount amount exceeded");
    }
    else 
    {
        var netVal=totalBill-discount;
        document.getElementById("netbprod").value=netVal;
    }
}