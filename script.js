//your JS code here. If required.
function daysOfYear(year) {
	if (year>=1&&year<=9999) {
		
	
	if ((year%4===0 && year%100!==0) ||(year%400===0)) {
		return 366;
	}
	else{
	    return 365;
	}
}
	else{
		return "The year should be 1 to 9999"
	}
	}
const year = prompt("year");

alert(daysOfYear(year));