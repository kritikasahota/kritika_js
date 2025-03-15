//let message;

message = 'Hello'; // store the string 'Hello' in the variable named message
console.log(message);

// value can be updated
let message;
message = 'Hello!';
message = 'World!'; // value changed
console.log(message);


//We can also declare two variables and copy data from one into the other.
let hello = 'Hello world!';
//let message;
message = hello;
console.log(hello); // Hello world!
console.log(message); // Hello world!

// CONSTANTS
const myBirthday = '18.04.1982';
myBirthday = '01.01.2001'; // error, can't reassign the constant!
 
//uppercase constants
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00