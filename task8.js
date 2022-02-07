function convertMinutestoHour(numMinutes){
    let convertedMinutes;
    if (numMinutes < 60){
        if(numMinutes === 1){
            convertedMinutes = "0 hours, " + numMinutes + " minute.";
        }else{
            convertedMinutes = "0 hours, "+ numMinutes + "minutes.";
        }
    }else if (numMinutes % 60 === 0){
        const numHours = numMinutes / 60;
        if(numMinutes == 60){
            convertedMinutes = "0 hours, 60 minutes.";
        }else{
            convertedMinutes = numHours + " hours, 0 minutes.";
        }
    }else{
        const numHours = Math.floor(numMinutes / 60);
        const remainingMinutes = numMinutes % 60;
        if(numHours === 1){
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