function calcTimeAndBill()
{
    
    inpHourIT = document.getElementById("inTimeh").value;
    inpMinIT = document.getElementById("inTimem").value;
    
    outHourIT = document.getElementById("outTimeh").value;
    outMinIT = document.getElementById("outTimem").value;
    //working
    if(inpHourIT<outHourIT || (inpHourIT == outHourIT && inpMinIT<outMinIT))
    {
    hourStay= outHourIT - inpHourIT;
    minStay= outMinIT - inpMinIT
    document.getElementById("stayh").value = hourStay; 
    document.getElementById("staym").value = minStay;

    var totalTimeInMin = parseInt(hourStay*60)+ parseInt(minStay);
    document.getElementById("bill").value= (totalTimeInMin*2)/5;
    }
    //working
    else if (inpHourIT < outHourIT || (inpHourIT == outHourIT && inpMinIT > outMinIT)) {
        
        if (inpHourIT < outHourIT) {
            hourStay = outHourIT - inpHourIT;
        } else {
            hourStay = 24 - (inpHourIT - outHourIT);
        }
        
        if (inpMinIT > outMinIT) {
            hourStay--;
            minStay = 60 - (inpMinIT - outMinIT);
        } else {
            minStay = outMinIT - inpMinIT;
        }
    
        document.getElementById("stayh").value = hourStay;
        document.getElementById("staym").value = minStay;
    
        var totalTimeInMin = hourStay * 60 + minStay;
        document.getElementById("bill").value = (totalTimeInMin * 2) / 5;
    }
    //working
    else if(inpHourIT>outHourIT && inpMinIT<outMinIT)
    {
        hourStay= (24-(inpHourIT - outHourIT));
        minStay= outMinIT - inpMinIT;
        if(minStay==60)
        {
            hourStay+=1;
            minStay=0;
        }
        document.getElementById("stayh").value = hourStay; 
        document.getElementById("staym").value = minStay;

    
        var totalTimeInMin = parseInt(hourStay*60)+ parseInt(minStay);
        document.getElementById("bill").value= (totalTimeInMin*2)/5;
    }
    //working
    else if (inpHourIT>outHourIT && inpMinIT>outMinIT)
    {
        hourStay= 23-(inpHourIT - outHourIT);
        minStay = 60-(inpMinIT-outMinIT);
        document.getElementById("stayh").value = hourStay; 
        document.getElementById("staym").value = minStay;

        var totalTimeInMin = parseInt(hourStay*60)+ parseInt(minStay);
        document.getElementById("bill").value = (totalTimeInMin*2)/5;
    }
    //working
    else if(inpHourIT>outHourIT && inpMinIT==outMinIT)
    {
        hourStay= 24 - (inpHourIT - outHourIT);
        minStay = 0;
        document.getElementById("stayh").value = hourStay; 
        document.getElementById("staym").value = minStay;

        var totalTimeInMin = parseInt(hourStay*60)+ parseInt(minStay);
        document.getElementById("bill").value = (totalTimeInMin*2)/5;
    }
//done
    // else 
    // {
    //     if(inpHourIT==outHourIT && inpMinIT==outMinIT)
    //     {
    //         document.getElementById("stayh").value = 0;
    //         document.getElementById("staym").value = 0;
    //         document.getElementById("bill").value = 0;
    //     }
    //     else 
    //     {
    //         document.write("Invalid Input Entered");
    //     }
    // }

}