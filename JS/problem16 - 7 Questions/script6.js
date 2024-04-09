function iDisc()
{
    num=document.getElementById("number").value;

    if(num<=4500)
    {
        discount=num/10;
        alert("The Discount on given purchase will be : " + discount);
    }
    else
    {
        alert("Your bill amount is : "+ num + " and you are not elligible for any discount");
    }
}