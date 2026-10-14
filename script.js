
function getPWLength() {
	/* MJS - get password length - up to 4 tries - else default length is returned */ 
	/* Value must be 8 to 128 */ 
	var pwLength = 8; 
	var maxTries = 4;  // after maxTries we return default value 
	var defLength = 10;  // default password length
	var tries = 0; 
	var done = false;
	while (!done) {    // use while here - do ... while is do once, repeat while 
		tries++; 
		if (tries > maxTries) {
			alert("You've exceeded " + maxTries + " tries. Returning default of " + defLength);
			return defLength; 
		}
		let pwLengthString = prompt("Enter password length (8 to 128)"); 
		// We check isNaN(string) before using Number(string->Number conversion) before 
		// checking if number is in range. Other ways exist to do this in one step. 
		if (isNaN(pwLengthString)) {
			alert("You must enter a numeric string. "); 
		} else { 
			pwLength = Math.floor(Number(pwLengthString));   // string->number and truncate reals such as 9.9
			console.log("pwLength is " + pwLength); 
			if (pwLength < 8 || pwLength > 128) {
				alert("Length must be between 8 and 128");
			} else { 
				done = true; 
			}
		} // end if-else
	} // end while !done	
	return pwLength; 
}  // end getPWLength

/* Get possible characters (lowercase, uppercase, digit, special chars) for password by asking user. */
// Give user only so many tries. Avoids infinite loops but slightly tweaks project criteria 
function getPossibleChars() {
	var done = false;
	var maxTries = 4;
	var tries = 0;  // tries so far
	var charStrings = ["0123456789", "abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", 
		'!"#$' + "%&'()*+,-./:;<=>?@[\]^_`{|}~"]; 
	// nameStrings length must match charStrings => better to have an object here, but beyone project scope
	var nameStrings = ["numbers", "lower case letters", "upper case letters", "special characters"]; 
	var charString = "";
	while (!done) {
		if (++tries > maxTries) {
			alert("You have failed too many times. Using all types of characters.");
			for (let i=0; i < charStrings.length; i++) {
				charString += charStrings[i];
			} // end for
			console.log("Full charString being returned is " + charString); 
			charArray = charString.split(''); 
			return charArray; 
		} // end if tries > maxTries 
		for (let j=0; j < charStrings.length; j++) {
			if (confirm("Do you wish to include " + nameStrings[j] + " in your password?")) { 
				charString += charStrings[j];
				console.log("Added to charString ... " + charString);
			} 
		} // end for each type of character
		if (charString.length === 0) {
			alert("You must select at least 1 type of character (number, lower, upper or special). ");
		} else {
			done = true;
		} 
	} // end while !done

	var charArray = charString.split(''); 
	return charArray; 
}


function generatePassword() {
	var pwlength = getPWLength(); 
	var charArray = getPossibleChars(); 
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
