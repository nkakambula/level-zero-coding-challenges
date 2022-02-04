function removeLastCharacter(str){     //Function to remove the last character in a string
    let newString = "";
    for (let i = 0; i < str.length - 1; i ++){
        newString += str[i];
    }
    return newString;
}
function removeVowels(str){
    str =str.toLowerCase();
    let removedVowels = "";
    let vowels = ['a','e','i','o','u'];
    for(let i = 0; i < str.length;i++){
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