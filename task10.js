function removeLastCharacter(str){     //Function to remove the last character in a string
    var newString = "";
    for (var i = 0; i < str.length - 1; i ++){
        newString += str[i];
    }
    return newString;
}
function commonCharacters(str1,str2){
    var sameCharacters = "";
    for(var i = 0; i < str2.length;i++){
        if(str1.includes(str2[i])){
            if(sameCharacters.includes(str2[i])){   //If character is already written dont write it again
                continue;
            }else{
                sameCharacters += str2[i] + ",";
            }

        }
    }
    console.log("Common letters:" + removeLastCharacter(sameCharacters));
}

commonCharacters("house","computers")