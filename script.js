// Assignment  javaScript Code for the [password generator program
//function promptQuestions() {

//}
//return;
//Array for the range of characters  
var charset_numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var charset_lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charset_uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charset_special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "?", "/"];
// empty variable to hold char data
password = "";
//variable for the query selector
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// this function holds the main logic for generating the random password
function generatePassword() {
var repeat = true;
// This loop will loop through if the user either answers no or zero char
  while (repeat) {0
  //prompt questions for password questions 
    var numberChar = prompt("How many characters would you like in your password");
    var has_lowercase_char = confirm("Do you want lowercase char");
    var has_uppercase_characters = confirm("Do you want uppercase char");
    var has_special_char = confirm("Do you want special char");
    var has_numbers_char = confirm("Do you want numbers in your password");
    // this will alert the user must select an answer
    if (has_lowercase_char === false && has_uppercase_characters === false && has_special_char === false && has_numbers_char === false) {
      alert("You must choose an option");
      repeat = true;
    }else{
      repeat = false;
    }
    if(numberChar <=0){
      repeat = true;
      alert("Must enter the length greater thn zero");
    }
  //main logic and loop to randomly generate the password
  }
  for (var i = 0; i < numberChar; i++) {
    var num =Math.floor(Math.random() * 4);
    if(num == 0){
      password = password + charset_numbers[Math.floor(Math.random() * Math.floor(charset_numbers.length -1 ))];
    }
    if(num == 1){
    password = password + charset_lowercase[Math.floor(Math.random() * Math.floor(charset_lowercase.length -1 ))];

    }
    if(num == 2){
    password = password + charset_uppercase[Math.floor(Math.random() * Math.floor(charset_uppercase.length -1 ))];

    }
    if(num == 3){
    password = password + charset_special[Math.floor(Math.random() * Math.floor(charset_special.length -1 ))];

    }
    
    
  }
  console.log(password);
  return password;
}

 // var password1 = generatePassword();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
