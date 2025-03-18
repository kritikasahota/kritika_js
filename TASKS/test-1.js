/* WAP to print table of 2 using for loop */
let a = 2;
for(let b = 0; b <= 10; b++){
   let c = a*b;
    console.log(`2 * ${b} = ${c}`);
}


/* WAP to print odd number between 1 to 100 using any loop */
for ( let i = 0; i <= 100; i++){
    if( i % 2 != 0){
        console.log(i);
    }
}


/* WAP to print even numbers between 1 to 100 using any loop */
for ( let i = 0; i <= 100; i++){
    if( i % 2 == 0){
        console.log(i);
    }
}


/* WAP to calculate factorial of 5 */


//console.log(`Factorial of 5 is ${factorial}`);


/* WAP to swap two numbers in js */
let num1 = 3;
let num2 = 5;
console.log(`before swapping, num1 = ${num1} and num2 = ${num2}`);
let temp = num2;
num2 = num1;
 num1 = temp;
console.log(`after swapping, num1 = ${num1} and num2 = ${num2}`);


/* WAP to reverse a given string " Tajinder" */
let str = "Tajinder";
let reversedString = " ";

for(let char of str){
    reversedString = char + reversedString;
}
console.log(reversedString);


/* check whether the given number is prime or not */
let x = 5;
if ( x % 2 == 0 ){
    console.log("x is prime number");
}else{
    console.log("x is not a prime number");
}
