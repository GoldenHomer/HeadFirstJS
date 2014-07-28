function Dog(name, breed, weight){
	this.name = name;
	this.breed = breed;
	this.weight = weight;
}

Dog.prototype.species = "Canine";

Dog.prototype.bark = function () {
	this.weight > 25 ? document.write(this.name + " says Woof!") : document.write(this.name + " says Yip!");
}

Dog.prototype.run = function () {
	document.write("Run!");
}

Dog.prototype.wag = function(){
	document.write("Wag!");
}

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);

fido.bark();
fido.run();
fido.wag();

fluffy.bark();
fluffy.run();
fluffy.wag();

spot.bark();
spot.run();
spot.wag();

//Now, let's create another constructor called ShowDog to inherit from the Dog prototype

function ShowDog(name, breed, weight, handler){
	this.name = name;
	this.breed = breed;
	this.weight = weight;
	this.handler = handler;
}

//Create a dog instance that acts as the ShowDog prototype
ShowDog.prototype = new Dog();

//Now let's add some properties and methods exclusive to show dogs.

ShowDog.prototype.league = "Tiny";

ShowDog.prototype.stack = function(){
	console.log("Stack!");
}

ShowDog.prototype.bait = function(){
	console.log("Bait!");
}

ShowDog.prototype.gait = function(){
	console.log("Gait!");
}

ShowDog.prototype.groom = function(){
	console.log("Groom!");
}

var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");

scotty.stack();
scotty.bark();
console.log(scotty.league);
console.log(scotty.species);

