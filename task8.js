function convertMinutestoHour(numMinutes){
    var convertedMinutes;
    if (numMinutes < 60){
        if(numMinutes === 1){
            convertedMinutes = "0 hours, " + numMinutes + " minute.";
        }else{
            convertedMinutes = "0 hours, "+ numMinutes + "minutes.";
        }
    }else if (numMinutes % 60 === 0){
        var numHours = numMinutes / 60;
        if(numMinutes == 60){
            convertedMinutes = "1 hour, 0 minutes.";
        }else{
            convertedMinutes = numHours + " hours, 0 minutes.";
        }
    }else{
        var numHours = Math.floor(numMinutes / 60);
        var remainingMinutes = numMinutes % 60;
        if(numHours = 1){
            if (remainingMinutes === 1){
                convertedMinutes = "1 hour, 1 minute.";
            }else{
                convertedMinutes = "1 hour, " + remainingMinutes + " minutes.";
            }
        }else{
            if (remainingMinutes === 1){
                convertedMinutes = numHours + " hours, 1 minute."
            }else{
                convertedMinutes = numHours + " hours, "+ remainingMinutes + " minutes."
            }
        }
    }
    return convertedMinutes;
}

console.log(convertMinutestoHour(122));