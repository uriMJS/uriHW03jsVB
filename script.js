


function generatePassword() {
	var pwlength = 6; 
	var charArray = ["0123456789abcdefghij"];
	var pwd = ""; 
	for (let i = 1; i < 6; i++) {
		pwd = pwd + "a"; 
	}
	return pwd; 
}


// Assignment Code -- Supplied to user below this line  
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
