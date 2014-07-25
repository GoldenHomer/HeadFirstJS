function Car (make, model, year, color, passengers, convertible, mileage) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.passengers = passengers;
	this.convertible = convertible;
	this.mileage = mileage;
	this.started = false;
	this.start = function () {
		this.started = true;
	}
	this.stop = function () {
		this.started = false;
	}
	this.drive = function () {
		this.started ? document.write("Vroom Vroom!") : document.write("Start me first!");
	}

}

var cadiParams = { make: "GM",
					model: "Cadillac",
					year: 1955,
					color: "tan",
					passengers: 5,
					convertible: false,
					mileage: 12892
};

var cadi = new Car(cadiParams);

function Car (params) {
	this.make = params.make;
	this.model = params.model;
	this.year = params.year;
	this.color = params.color;
	this.passengers = params.passengers;
	this.convertible = params.convertible;
	this.mileage = params.mileage;
	this.started = false;

	this.start = function () {
		this.started = true;
	}
	this.stop = function () {
		this.started = false;
	}
	this.drive = function () {
		this.started ? document.write("Vroom Vroom!") : document.write("Start the engine first!");
	}
}