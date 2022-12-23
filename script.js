//  Assignment code here

var generateBtn = document.querySelector("#generate");

function generatePassword() {

 // selection for password generator.

 var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

 var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

 var specialCharactersArr = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~" ," "];

 var numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

 var match = [];

 // Prompt user for password criteria
    console.log("You clicked the button");
    var userChoice = prompt(
      "Choose a password length between 8-128 characters:"
    );
    console.log(userChoice);
   
    console.log("length is 8-128 characters");
    // if the number is less then 8 or more then 128 give an error, if it is between 8-128 they can continue

    if (userChoice >= 8 && userChoice < 128) {
      console.log("correct");

      
      var upperCaseChoice = window.confirm("Do you want an uppercase letter?");
      
      var lowerCase = window.confirm("Do you want a lowercase letter?");
      console.log("if lowercase is used", lowerCase)


      var specialCharacters = window.confirm("Do you want to use a special character?");

      var number = window.confirm("Do you want to use a number?");

  
      // error for less then 8 or more then 128 char
  } 
  else {
    console.log("cannot be less then 8 or more then 128");
    window.alert("You must choose 8-128 characters");
    generatePassword();

  }
 // boolean statements 
  if (upperCaseChoice === true) {
    match = match.concat(upperCaseArr);
  
  }

  if (number === true) {
    match = match.concat(numberArr);
  }

  if (lowerCase === true) {
  match = match.concat(lowerCaseArr);
  }

  if (specialCharacters === true) {
  match = match.concat(specialCharactersArr);
  }

console.log(match);
  // Display password in box

  let password = [];
  for (let i = 0; i < userChoice; i++) {
    password[i] = Math.floor(Math.random() * (match.length -1));
    password [i] = match[password[i]];
  }
  console.log(password);
  var returnPass = password.join("");
  return returnPass;
}
console.log("lenght is 8-128 charachters");

// write password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);