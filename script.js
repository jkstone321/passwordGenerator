const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];
const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  function generatePassword(){
    var passArray = [];
    var combChar = [];
    //ask how long for password
    var passLength = prompt("How many characters do you want your password to have?")  
    //check to see if its actually a number and a valid length
    if((isNaN(passLength)) || (passLength < 8 || passLength > 128)){
      do{
        passLength = prompt("Please enter a number between 8 and 128");
      }while((isNaN(passLength)) || (passLength < 8 || passLength > 128));
    }
    //ask for special chacters
    if(confirm("Would you like to have special characters in your password?")){
      combChar = combChar.concat(specialChars);
      alert("Special characters will be in your password");
    }
    //ask for numbers
    if(confirm("Would you like to have numbers in your password?")){
      combChar = combChar.concat(numberChars);
      alert("Numbers will be in your password");
    }
    //ask for uppercase
    if(confirm("Would you like to have uppercase letters in your password?")){
      combChar = combChar.concat(uppercase);
      alert("Uppercase letters will be in your password");
    }
    //ask for lowercase
    if(confirm("Would you like to have lowercase letters in your password?")){
      combChar = combChar.concat(lowercase);
      alert("Lowercase letters will be in your password");
    }
    //makes sure the user picked at least 1 option
    console.log(combChar);
    if(combChar.length == 0){
      alert("You must pick at least one");
    }
    //makes the pass into array and then joins the array with no commas and then returns the value
    for(var x = 0; x < passLength; x++){
        passArray.push(combChar[Math.floor(Math.random()*combChar.length)])
    }
    var finalPass = passArray.join("");
    return finalPass;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
