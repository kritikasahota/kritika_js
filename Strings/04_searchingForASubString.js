/* str.indexOf */
let str = 'Widget with id';
console.log( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
console.log( str.indexOf('widget') ); // -1, not found, the search is case-sensitive
console.log( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)

console.log( str.indexOf('id', 2) ) // 12

//using for loop
let str1 = 'As sly as a fox, as strong as an ox';
let target = 'as'; // let's look for it
let pos = 0;
while (true) {
  let foundPos = str1.indexOf(target, pos);
  if (foundPos == -1) break;
  console.log( `Found at ${foundPos}` );
  pos = foundPos + 1; // continue the search from the next position
}


//using if statement
let str2 = "Widget with id";
if (str2.indexOf("Widget") != -1) {
    console.log("We found it"); 
}

/* str.includes */
console.log( "Widget with id".includes("Widget") ); 

console.log( "Hello".includes("Bye") ); 

console.log( "Widget".includes("id") ); 
console.log( "Widget".includes("id", 3) ); 

/* str.startsWith */
console.log( "Widget".startsWith("Wid") ); 

/* str.endsWith */
console.log( "Widget".endsWith("get") ); 