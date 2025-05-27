// Write a function that returns the maximum number in an array.
const findMax = (arr) =>{
    if(arr.length === 0)
        return undefined;
        let max = arr[0];
        for(let i = 1; i<arr.length; i++){
            if(arr[i]> max) {
                max = arr[i];
            }
        }
        console.log("max number: ", max);
}
findMax([3,2,7,1,4]);


//Write a function to remove duplicate values from an array


//Write a function to return the sum of all elements in an array.
const addArrElements = (arr) => {
    let sum= 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    console.log("sum of arr: ",sum);
}
addArrElements([1,2,3,4,5]);


//Write a function to return the second largest number in an array.


//Write a function that counts how many even and odd numbers are in an array.
const differentiateNumbers = (arr) => {
    let even = 0;
    let odd = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            even++;
        } else{
            odd++;
        }
    }
    console.log("even numbers:",even);
    console.log("odd numbers:", odd);
}
differentiateNumbers([1,2,3,4,5,6,7,8,9])


//Write a function that returns an array of numbers greater than a specified number.

