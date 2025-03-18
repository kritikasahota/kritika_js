/* SYNTAX */
// for( let val of strVar){
//     // do some work
// }

let str = "JavaScript";
for( let i of str){
    console.log(i);
}

let str1 = "JavaScript";
let length = 0;
for(let i of str1){
    console.log("i = ", i);
    length++;
}
console.log("length =  ", length);