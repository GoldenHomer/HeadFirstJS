function makeCounter () {
	var count = 0;

	function counter(){
		count++;
		return count;
	}
	return counter;
}
var doCount = makeCounter();

document.write(doCount());
document.write(doCount());
document.write(doCount());
