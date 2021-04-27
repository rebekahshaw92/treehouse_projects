function getRandomNumber( lower, upper ){
 if ( isNaN(lower) || isNaN(upper) ){
     throw new Error("Both arugments must be numbers"); 
     }
return Math.floor (Math.random() * upper - lower + lower) + lower; 
}

console.log( getRandomNumber ( 1, 6 ) );
console.log( getRandomNumber ( "nine", 100 ) );
console.log( getRandomNumber ( 200, 500 ) );
console.log( getRandomNumber ( 1000, 2000 ) );
console.log( getRandomNumber ( 50, "one-hundred" ) );