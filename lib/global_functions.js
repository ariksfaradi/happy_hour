convertToFloat = function(hour) {
	var retVal = hour.substr(0,2) + "." + hour.substr(3,4);
	return parseFloat(retVal);
}
