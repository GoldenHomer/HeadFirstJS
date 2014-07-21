function makeCounter () {
	var count = 0;

	function counter(){
		count++;
		return count;
	}
	return counter;
}