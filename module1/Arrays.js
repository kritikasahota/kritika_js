let arr = new Array();
let arr1 = [];
let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits[0]); 
console.log(fruits[1]);

fruits[2] = 'pear';   /*element can be replaced*/

fruits[3]= "lemon";    /*adding a new element*/
console.log(fruits);

console.log(fruits.length);   /*TO FIND LENGTH*/

console.log(fruits[2]);   /*accesing characters*/

console.log( fruits[fruits.length-1] );       /*accessing last element*/
console.log(fruits.at(-1));

for (let i = 0; i< fruits.length; i++)     /*LOOPING OF AN ARRAY*/
{
    console.log(fruits[i]);
} 

console.log(fruits.pop())

