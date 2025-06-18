//Write a function that takes two numbers and returns their sum.
function addNumbers(a, b) {
    console.log("sum:", a + b);
}
addNumbers(2, 3);


//Write a function to check whether a number is prime.
function isPrime(x) {
    if ( x % 2 !== 0 ){
        console.log("x is prime number");
    }else{
        console.log("x is not a prime number");
    }
}
isPrime(6);


//Write a function that converts a temperature from Celsius to Fahrenheit.
const celsius_To_Farenheit = (celsius) => {
    console.log("celsius temp to farenheit temp:",celsius * (9/5) + 32);
}
celsius_To_Farenheit(2);


//Write a function that takes any input and returns its type.
const findingType = (a) => {
    console.log("It's type is:",typeof(a));
}
findingType(true);


//Write a function that counts down from a given number to 0 using a loop.
function countDown(num) {
    for(let i= num; i >= 0; i--){
        console.log(i);
    }
}  
countDown(10);


//Create a function that takes another function and a value, applies the function to the value, and returns the result.
function square(num){
    console.log(`square of ${num} is ${ num * num}`);
}
function calculator(num, squareCallback) {
    squareCallback(num);
}
calculator(5, square);