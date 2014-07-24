function widget(partNo, size){
	this.no = partNo;
	this.breed = size;
}

function FormFactor(material, widget){
	this.material = material;
	this.widget = widget;
}

var widgetA = new widget(100,"large");
var widgetB = new widget(101, "small");
var formFactorA = new FormFactor("plastic", widgetA);
var formFactorB = new FormFactor("metal", widgetB);

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poddle", 30);
var spot = new Dog("Spot". "Chihuahua", 10);

var dogs = [fido, fluffy, spot];

for(var i = 0l i < dogs.length; i++){
	dogs[i].bark();
}
