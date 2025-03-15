/* STRING CONVERSION */
let value = true;
console.log(typeof value); 
value = String(value); 
console.log(typeof value); 

/* NUMERIC CONVERSIONS */
console.log( "6" / "2" ); // 3, strings are converted to numbers

let str = "123";
console.log(typeof str); // string
let num = Number(str); // becomes a number 123
console.log(typeof num); // number

let age = Number("an arbitrary string instead of a number");
console.log(age); // NaN, conversion failed

console.log( Number("   123   ") );
console.log( Number("123z") );      
console.log( Number(true) );        
console.log( Number(false) );       

/* BOOLEAN CONVERSIONS */
console.log( Boolean(1) ); 
console.log( Boolean(0) ); 

console.log( Boolean("hello") );
console.log( Boolean("") ); 