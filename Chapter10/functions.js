var migrating = true;

var fly = function(num) {
	for (var i = 0; i < num.length; i++) {
		console.log("Flying!");
	}
};

function quack(num){
	for (var i = 0; i < num.length; i++) {
		console.log("Quack!");
	}
};

if (migrating) {
	quack(4);
	fly(4);
};
