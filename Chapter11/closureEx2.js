function makePassword (password) {
	return function acceptPassword(passwordGuess){
		passwordGuess === password ? true : false;
	}
}

function multN (n) {
	return function multiply (m) {
		return n*m;
	}
}