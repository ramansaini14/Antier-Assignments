var cities = ["ijk","abc", "def", "lmn"];

var city1=["abc", "def", "ijk"];
var city2=["lmn"];
var count=0;


var fName=["Manoj", "Raman"];
var mName=[null, "Singh"];
var lName=["Bajwa", "Saini"];

var complete=[];

var cityToFind="def";
function showOutput()
{
    for (var i=0; i<cities.length; i++)
    {
        console.log(cities[i]);

       
    }
    for (var i=0; i<cities.length; i++)
    {
        console.log(cities[i].toUpperCase());
    }
    for (var i=0; i<cities.length; i++)
    {
        console.log(cities[i].toLowerCase());
    }
    console.log(cities.sort());

    console.log(city1.concat(city2));

    console.log(cities.reverse());

    for (var i=0; i<cities.length; i++)
    {
        if(cities[i]==cityToFind)
        {
            count++;
        }
    }
    console.log("element found at index "+ count);



    // for (var i=0; i<=fName.length-1; i++)
    // {
    //     complete.push(fName[i]+" "+lName[i]);
    // }
    // console.log(complete);

    for (var i=0; i<fName.length; i++)
    {
        if(mName[i]==null)
        {
            complete.push(fName[i]+" " + "" +lName[i]);
        }
        else 
        {
            complete.push(fName[i]+" " + mName[i] + " " +lName[i]);
        }
    }
    console.log(complete);
}