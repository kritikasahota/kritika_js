//Write a loop that prints numbers from 1 to n.
for(let i = 1; i<=10; i++){
    console.log(i);
}


// Print the multiplication table of a given number up to 10.
function table(num){
    let result;
    let i;
    for( i = 1; i<=10; i++){
        result = num*i;
            console.log(`${num} x  ${i} = ${result}`);
    }
}
table(2);


// Write a program to calculate the sum of all numbers from 1 to n.
let sum = 0;
for(let i = 1; i<=10; i++){
    sum = sum + i;
}
console.log(sum);


// Write a function that returns the factorial of a number.
const calculateFactorial = (num) => {
    let factorial = 1;
    for(let i = 1; i<=num; i++){
        factorial = factorial*i;
    }
    console.log("factorial: ",factorial);
}
calculateFactorial(7);


//Write a function to print the first n numbers in the Fibonacci sequence.
const fibonacciSequence = (n) => {
    let a = 0;
    let b = 1;
    for(let i = 1; i < n; i++){
        console.log(a);
        [a,b]= [b, a + b];
    }
}
fibonacciSequence(10);


// Write a function that counts the number of digits in a number using a loop.
const countDigits = (num) => {
    let count=0;
    for(let digit of num.toString()){
        count++;
    }
    console.log("numberof digits: ", count);
}
countDigits(123456789);