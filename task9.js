function removeLastCharacter(str){     //Function to remove the last character in a string
    var newString = "";
    for (var i = 0; i < str.length - 1; i ++){
        newString += str[i];
    }
    return newString;
}
function removeVowels(str){
    str =str.toLowerCase();
    var removedVowels = "";
    var vowels = ['a','e','i','o','u'];
    for(var i = 0; i < str.length;i++){
        if (vowels.includes(str[i])){
            if(removedVowels.includes(str[i])){
                continue;
            }else{
                removedVowels += str[i] +","
            }
            
        }
    }
    console.log("Vowels: " + removeLastCharacter(removedVowels)); //Function will remove the "," in output so no comma at the end
}

removeVowels("Alphabet");