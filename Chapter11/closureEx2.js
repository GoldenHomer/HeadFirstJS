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

function makeCounter(){
	var count = 0;
	var obj = {increment: function (){
		return counter++;}
	}
	return obj;
}