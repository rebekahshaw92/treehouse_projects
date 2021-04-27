var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
//document.write("There are " + secondsPerDay + " seconds in a day");
var yearsAlive = 25;
var secondsAlive = secondsPerMin * secondsPerDay * minsPerHour * daysPerWeek * yearsAlive;
document.write("I have been alive for " + secondsAlive + " seconds");

var HTMLBadges = prompt("How many HTML badges do you have?");
var CSSBadges = prompt("How many CSS badges do you have?");
var totalBages = parseInt(HTMLBadges) + parseInt(CSSBadges);
alert("Wow! You have " + totalBages + " badges!");