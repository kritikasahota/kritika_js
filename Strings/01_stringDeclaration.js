// STRING DECLARATION
let str ="single-quoted";
let str2 = "double-quoted";

// STRING LENGTH
console.log(str.length);

// STRING INDICES
console.log(str[5]);

// TEMPLATE LITERALS
let item = "pen" ;
let price = 10;
console.log(`The cost of ${item} is ${price} rupees`)

// IMMUTABLE
let str3 = 'Hi';

str3[0] = 'h'; // error
console.log( str3[0] ); // doesn't work
