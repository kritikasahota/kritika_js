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

// UNARY OPERATORS
let m = 5;
let n = 2;

console.log("m = ", m, " & n = ", n);

m++; //postfix
console.log("m = ", m++);

++m; //prefix
console.log("m = ", ++m);

m--; // postfix
console.log("m = ", m--);

--m; // prefix
console.log("m = ", --m);

// ASSIGNMENT OPERATORS
c = 7;

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

// COMPARISON OPERATORS
let x = 3;
let y = 4;
let z = "4";

console.log("x = ", x," & y = ", y);
console.log("x == y", x == y);
console.log("x == z", x == z);

console.log("x != y", x != y);
console.log("x != z", x != z);

console.log("x === y", x === y);
console.log("x === z", x === z);

console.log("x !== y", x !== y);
console.log("x !== z", x !== z);

console.log("x > y", x > y );

console.log("x <= y ", x <= y);

console.log("x >= y", x >= y);

// LOGICAL OPERATORS
let u = 6;
let v = 5;

let cond1 = a > b ;
let cond2 = a === b ;

console.log( "cond1 && cond2 = ", cond1 && cond2);

console.log( "cond1 || cond2 = ", cond1 || cond2);

console.log( "!(u < v) = ", !(u < v));

//TERNARY OPERATOR
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


















