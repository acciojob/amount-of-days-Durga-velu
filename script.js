//your JS code here. If required.
function daysOfYear(year) {
	if ((year%4===0 && year%100!==0) || (year%400===0)) {
		return parseInt(366);
	}
	else{
	    return parseInt(366);
	}
}
const year = prompt ("year");
year=number.parseInt(year);
alert(daysOfYear(year));