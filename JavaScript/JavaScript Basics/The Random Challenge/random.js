var input1 = prompt("Please type a starting number");
var bottomNumber = parseInt(input1);         
var input = prompt("Please Enter a Random Number");
var topNumber = parseInt(input);
var randomNumber = Math.floor(Math.random() *(topNumber - bottomNumber + 1)) + bottomNumber;
var message = "<p>" + randomNumber + " is a number between " + bottomNumber + " and " + topNumber + " </p>";
document.write(message);