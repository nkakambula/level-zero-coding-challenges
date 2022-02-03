function maximum(num1,num2,num3){
    var maxNumber = num3;
    if(num1 > num2 && num1 > num3){
        maxNumber = num1;
    }else if(num2>num1 && num2>num3){
        maxNumber = num2;
    }
    return maxNumber;
}