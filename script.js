// NEED TO ADD 4 arrays with lowercase uppercase etc
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = [0,1,2,3,4,5,6,7,8,9];
var specChar = ["`","_","@",">","=","<",";","/",".",",","'","%","$","#","+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":","\"","\\"];
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function passOption1() {
  var passLength = prompt("Enter desired password length.") 
  if(passLength < 8 || passLength > 128){
    alert("Password must be between 8 and 128 charactrers.");
    return
  }
  if(isNaN(passLength)===true){
    alert("Password length must be a number between 8 and 128.")
    return
  }
  var passlcase = confirm("Would you like to use lowercase letter?")
  var passucase = confirm("Would you like to use uppercase letters?")
  var passnum = confirm("Would you like to use numbers in your password?")
  var passSpec = confirm("Would you like to use special characters?")
  if(passlcase === false && passucase === false && passnum === false && passSpec === false){
    alert("Must select at least one character type option.")
    return
  }
  var passOptions = {
    length:passLength, 
    passlcase,
    passucase,
    passnum,
    passSpec
  }

}
console.log(specChar);

//passOption1();
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//lowercase, uppercase, numeric, and/or special characters