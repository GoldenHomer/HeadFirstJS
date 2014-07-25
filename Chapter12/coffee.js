function Coffee (roast, ounces) {
	this.roast = roast;
	this.ounces = ounces;
	getSize : function (){
		switch(this.ounces){
			case 8:
				document.write("small");
				break;
			case 12:
				document.write("medium");
				break;
			case 16:
				document.write("large");
				break;
			default:
				document.write("No such size!");
				break;
		}
	}
	toString : function (){
		document.write("You've ordered a " + getSize + this.roast + " coffee.");
	}
}

var houseBlend = new Coffee("House Blend", 12);
console.log(houseBlend.toString());

var darkRoast = new Coffee("Dark Roast", 16);
console.log(darkRoast.toString());