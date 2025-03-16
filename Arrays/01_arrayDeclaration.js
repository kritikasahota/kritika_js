let arr = new Array();
let arr1 = [];

let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits);

console.log( fruits[0] ); 
console.log( fruits[1] ); 
console.log( fruits[2] ); 

fruits[2] = 'Pear'; /* replacing an element */
console.log(fruits);

fruits[3] = 'Lemon'; /* adding new element */
console.log(fruits);

console.log(fruits.length);   /*TO FIND LENGTH*/

console.log(fruits[2]);   /*accesing characters*/

console.log( fruits[fruits.length-1] );       /*accessing last element*/
console.log(fruits.at(-1));

/* Multidimensional array */
let matrix = [ 
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(matrix[0][1]);