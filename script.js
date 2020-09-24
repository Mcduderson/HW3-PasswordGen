// Arrays for lowercase, uppercase, numeric, special characters, and an empty array to hold choices.
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = [0,1,2,3,4,5,6,7,8,9];
var specChar = ["`","_","@",">","=","<",";","/",".",",","'","%","$","#","+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":","\"","\\"];

// My function to generate a random password between 8 and 128 characters long.
function generatePassword() {

  var choiceArray = [];
  var passwordRandom = "";

  //Prompt user to choose their password length, with validation.
  var passLength = prompt("Enter desired password length.") 
  if(passLength < 8 || passLength > 128){
    alert("Password must be between 8 and 128 characters.");
    return
  }
  if(isNaN(passLength)===true){
    alert("Password length must be a number between 8 and 128.")
    return
  }

  //gather booleans based on the user preference.
  var passlcase = confirm("Would you like to use lowercase letter?")
  var passucase = confirm("Would you like to use uppercase letters?")
  var passnum = confirm("Would you like to use numbers in your password?")
  var passSpec = confirm("Would you like to use special characters?")

  //Push the selected arrays to the choiceArray, with validation.
  if(passlcase){
    choiceArray.push(lower);
  }
  if(passucase){
    choiceArray.push(upper);
  }
  if(passnum){
    choiceArray.push(numeric);
  }
  if(passSpec){
    choiceArray.push(specChar);
  }
  if(!passlcase && !passucase && !passnum && !passSpec){
    alert("Must select at least one character type option.")
    return
  }
  
  //Loop for the password generator based on length user entered.
  for(var i=0;i<passLength;i++){

    var randomArray = Math.floor(Math.random()*choiceArray.length);
    var randomArrayChoice = choiceArray[randomArray];
    var randomNum = Math.floor(Math.random()*randomArrayChoice.length);
    var randomCharacter = randomArrayChoice[randomNum];

    passwordRandom += randomCharacter;
  }

  password.textContent = passwordRandom;

}

//Button interactions.
var generate = document.getElementById("generate");
var password = document.getElementById("password");
generate.onclick = generatePassword;