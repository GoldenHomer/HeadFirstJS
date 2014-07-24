//Exercise 1
function makePassword (password) {
	return function acceptPassword(passwordGuess){
		return (passwordGuess === password);
	};
}

var tryGuess = makePassword("sekret");
document.write("Guessing 'nope': " + tryGuess("nope"));
document.write("Guessing 'sekret': " + tryGuess("sekret"));

//Exercise 2
function multN (n) {
	return function multiply (m) {
		return n*m;
	}
}
var multBy3 = multN(3);
document.write("multiplying 2: " + multBy3(2));
document.write("Multiplying 3: " + multBy2(3));


//Exercise 3
function makeCounter(){
	var count = 0;
	return {
		increment: function (){
		count++;
		return count;}
	}
}

var counter = makeCounter();
document.write(counter.increment());