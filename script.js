


function generatePassword() {
	var pwlength = 6; 
	var charString = "0123456789abcdefghij";
	var charArray = charString.split('');
	var possibleChars = charArray.length; 
	var pwd = ""; 
	for (let i = 1; i <= pwlength; i++) {  // let has local scope 
		let random = Math.floor(Math.random() * possibleChars); 
		console.log("Random is " + random + " possibleChars " + possibleChars); 
		pwd = pwd + charArray[random]; 
		console.log("charArray is " + charArray); 
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
