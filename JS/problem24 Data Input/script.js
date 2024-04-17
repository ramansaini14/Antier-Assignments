
function shareOnFB(name,age,city)
{
    var url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href)+'&quote='+encodeURIComponent('Check out '+name+', '+age +' years old from '+city+'!');

    window.open(url, "_blank");
}

function shareOnX(name,age,city)
{
        var url = 'https://twitter.com/intent/tweet?url='+encodeURIComponent(window.location.href)+'&text='+encodeURIComponent('Check out '+name+', '+age+' years old from '+city+'!');
        
        window.open(url, "_blank");
}