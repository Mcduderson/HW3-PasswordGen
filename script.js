// Arrays for lowercase, uppercase, numeric, special characters, and an empty array to hold choices.

var choiceArray = [];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = [0,1,2,3,4,5,6,7,8,9];
var specChar = ["`","_","@",">","=","<",";","/",".",",","'","%","$","#","+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":","\"","\\"];

// My function to generate a random password between 8 and 128 characters long.
function generatePassword() {

  var passwordRandom = "";

  //
  var passLength = prompt("Enter desired password length.") 
  if(passLength < 8 || passLength > 128){
    alert("Password must be between 8 and 128 characters.");
    return
  }
  if(isNaN(passLength)===true){
    alert("Password length must be a number between 8 and 128.")
    return
  }

  //
  var passlcase = confirm("Would you like to use lowercase letter?")
  var passucase = confirm("Would you like to use uppercase letters?")
  var passnum = confirm("Would you like to use numbers in your password?")
  var passSpec = confirm("Would you like to use special characters?")
  if(passlcase === false && passucase === false && passnum === false && passSpec === false){
    alert("Must select at least one character type option.")
    return
  }
  
  //
  if(passlcase===true){
    choiceArray.push(lower);
  }
  if(passucase===true){
    choiceArray.push(upper);
  }
  if(passnum===true){
    choiceArray.push(numeric);
  }
  if(passSpec===true){
    choiceArray.push(specChar);
  }

  //Loop for the password generator based on length user entered.
  for(var i=0;i<passLength;i++){

    var 
  }

}

generatePassword()

console.log (choiceArray);

var passOptions = {
  length:passLength, 
  passlcase,
  passucase,
  passnum,
  passSpec
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Assignment Code
var generateBtn = document.querySelector("#generate");



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//lowercase, uppercase, numeric, and/or special characters