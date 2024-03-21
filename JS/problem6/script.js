function shiftItem()
{
    mp=document.getElementById("mulPick");
    de=document.getElementById("destin");

    var items=mp.options[mp.selectedIndex];

    var newItems=document.createElement("option");
    newItems.text=items.text;

    de.add(newItems);
    mp.remove(mp.selectedIndex);

    if(newItems.text=="Soap")
    {
        bill.value=100;
    }
}