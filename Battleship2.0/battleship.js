var model = {
	boardsize: 7,
	numShips: 3,
	shipLength: 3,
	shipsSunk: 0,

	ships: [
	{locations: [0,0,0], hits: ["","",""]},
	{locations: [0, 0, 0], hits: ["", "", ""]},
	{locations: [0, 0, 0], hits: ["", "", ""]}
	],

	fire : function(guess){
		
	}
}

var view = {
	displaymessage: function(msg) {
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},

	displayHit: function(location){
		var cell = document.getElementById(location);
		cell.setAttribute("class","hit");
	},
	
	displayMiss: function(location){
		var cell = document.getElementById(location);
		cell.setAttribute("class","miss");
	}
};