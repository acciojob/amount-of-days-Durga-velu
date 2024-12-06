//your JS code here. If required.
function daysOfYear(year) {
	if ((year%4===0 && year%100!==0) || (year%400===0)) {
		alert parseInt("366");
	}
	else{
	    alert parseInt("365");
	}
}
const year = prompt("year");
year=number.parseInt(year);
alert(daysOfYear(year) + return );