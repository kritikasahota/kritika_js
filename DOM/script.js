console.log("HELLO");
window.console.log("hello");
alert("hello");

console.dir(document);
console.dir(document.body);

/* changing background color */
document.body.style.background = "green";

/* changing text */
//document.body.childNodes[1].innerText = "abcd";

/* DOM MANIPULATION */
let heading = document.getElementById("heading"); // selecting with Id
console.log(heading);

let heading2 = document.getElementsByClassName("heading2"); // selecting with class
console.log(heading2);

let parahs = document.getElementsByTagName("p"); //selecting with tag name
console.log(parahs);

/* QUERY SELECTOR */
let elements = document.querySelector("p");
console.log(elements);

let allElements = document.querySelectorAll("p");
console.log(allElements);