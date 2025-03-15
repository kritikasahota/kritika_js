//ARITHMETIC OPERATIONS
let a = 5;
let b = 2;

console.log("a = ", a, " & b = ", b);
console.log("a + b = ", a + b);

console.log("a - b = ", a - b);

console.log("a * b = ", a * b);

console.log("a / b = ", a / b);

console.log("a % b = ", a % b);

console.log("a ** b = ", a ** b);

/* STRING CONCATENATION WITH BINARY + */
let s = "my" + "string";
console.log(s); 

console.log( '1' + 2 );
console.log( 2 + '1' ); 
console.log(2 + 2 + '1' ); 
console.log('1' + 2 + 2); 

console.log( 6 - '2' ); 
console.log( '6' / '2' ); 

//let apples = "2";
//let oranges = "3";
console.log( apples + oranges ); //the binary plus concatenates strings

/* NUMERIC CONVERSION UNARY + */
//let x = 1; // No effect on numbers
console.log( +x ); 
//let y = -2;
console.log( +y ); 

console.log( +true ); // Converts non-numbers
console.log( +"" );  

let apples = "2";
let oranges = "3";
console.log( +apples + +oranges ); // both values converted to numbers before the binary plus

console.log( Number(apples) + Number(oranges) ); // the longer variant

/* UNARY OPERATORS */
let m = 5;
let n = 2;

console.log("m = ", m, " & n = ", n);

/* INCREMENT */
//let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
console.log( counter ); 

/* DECREMENT */
let counter = 2;
counter--;        // works the same as counter = counter - 1, but is shorter
console.log( counter ); 

m++; //postfix
console.log("m = ", m++);

++m; //prefix
console.log("m = ", ++m);

m--; // postfix
console.log("m = ", m--);

--m; // prefix
console.log("m = ", --m);

/* ASSIGNMENT OPERATORS */
c = 7;

//let x = 2 * 2 + 1;
console.log( x ); 

//let a, b, c; // chaining assignments
a = b = c = 2 + 2;
console.log( a ); 
console.log( b ); 
console.log( c );

c += 4; // c = c + 4
console.log("c = ", c);

c -= 4; // c = c - 4
console.log("c = ", c);

c *= 4; // c = c * 4
console.log("c = ", c);

c /= 4; // c = c / 4
console.log("c = ", c);

c **= 4; // c = c ** 4
console.log("c = ", c);

/* TERNARY OPERATOR */
let marks = 45;
let result = marks < 33 ? "fail" : "pass"; 
console.log(result);

// TASK - 1
let num = 16;
if(num % 5 === 0){
    console.log("divisible by 5");
}else{
    console.log("not divisible by 5");
}


















