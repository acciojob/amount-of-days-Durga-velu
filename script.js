//your JS code here. If required.
function daysOfYear(year) {
	if (parseInt(year%4===0 && year%100!==0) ||parseInt(year%400===0)) {
		return 366;
	}
	else{
	    return 365;
	}
}
const year = prompt("year");

alert(daysOfYear(year));