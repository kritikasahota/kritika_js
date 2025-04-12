/* FOR LOOP */
let heroes = [ "thor", "spiderman", "ironman", "antman", "Dr.Strange"];

for( let idx = 0; idx < heroes.length; idx++){
    console.log(heroes[idx]);
}

/* for of loop */
for(let el of heroes){
    console.log(el);
}

/* FOR EACH LOOP */


/* TASK 1 */
let arr = [85, 97, 44, 37, 76, 60];

let sum = 0;

for(let val of arr){
    sum = sum + val;
    }
let avg = sum / arr.length;
console.log("average =  ",avg);

/* TASK 2 */
let prices = [250, 645, 300, 900, 50];

let idx = 0;

for(let val of prices){
    console.log(`value at index ${idx} = ${val}`);
    
    offer = val/10;
    val = val - offer;

    console.log(`value after offer = ${val}`);
    
    idx++;
}