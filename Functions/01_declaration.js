function showMessage() {
    console.log("Hello World");
}
showMessage(); // function calling
showMessage();

/* second method */
// function name(para1, para2,...){
//     //body
// }

function myFunction(msg){
     console.log(msg);
}
myFunction("I Love JS");  //argument

/* calculating sum */
function sum(a, b){
    console.log(a + b);
}
sum(3,7);

/* ARROW FUNCTIONS */
const arrowSum = (x, y) => {
    console.log(x + y);
};
arrowSum (3, 4);