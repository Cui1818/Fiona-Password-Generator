

//Assigment code here
var getPasswordOptions  = function () {
// Array of numeric characters to be included in password
var numericCharacters =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];



var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

}





// Function to prompt user for password options
numericCharacters= prompt("How many characters do you want in your password? Choose between 8-128 characters.");
  if( numericCharacters < 8 || numericCharacters > 128) {
    
  } else if (isNaN(numericCharacters)) {
    numericCharacters = prompt("Please enter a valid number.");
  }
  else {
    alert("Your password will be " + numericCharacters + " characters long.");
    
  }
  hasUppercase = confirm("Do you want uppercase characters?");
  if (hasUppercase) {
    alert("Your password will have uppercase characters.");
  }
  else {
    alert("Your password will NOT have uppercase characters.");
  }
  
  hasLowercase = confirm("Do you want lowercase characters?");
  if (hasLowercase) {
    var turnToLowercase = alert("Your password will have lowercase characters.");
  }
  else {
    alert("Your password will NOT have lowercase characters.");
  }
  hasSpecial = confirm("Do you want special characters?");
  if (hasSpecial) {
    alert("Your password will have special characters.");
  }
  else {
    alert("Your password will NOT have special characters.");
  }

  
  

// Function for getting a random element from an array
function getRandomnumericCharacters( ) {
  return getPasswordOptions.numericCharacters[i](Math.floor(Math.random)*10);
}
 
function getRandoupperCasedCharacters( ){
  return getPasswordOptions.upperCasedCharacters[i](Math.floor(Math.random)*26);

}
function getlowerCasedCharacter( ){
  return getRandomnumericCharacters.lowerCasedCharacters[i](Math.floor(Math.random)*26);
}

function getspecialCharacters( ){
  return getPasswordOptions.specialCharacters[i](Math.floor(Math.random)*23);
  
}

console.log(getRandomnumericCharacters);
console.log(getRandoupperCasedCharacters);
console.log(getlowerCasedCharacter);
console.log(getspecialCharacters);
// Function to generate password with user input
function generatePassword() {

 return"GernetarePassword password will go here!"
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);