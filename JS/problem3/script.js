function calcBill()
{
    var p=document.getElementById("paprod").value;
    var q=document.getElementById("qaprod").value;
    var totalBill=parseInt(p)*parseInt(q);
    document.getElementById("bbprod").value=totalBill;
    var discount=(totalBill*10)/100;
    document.getElementById("dbprod").value=discount;
    var netVal=totalBill-discount;
    document.getElementById("netbprod").value=netVal;
}