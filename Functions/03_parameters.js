function showMessage(from, text) { //parameters
    console.log(from + ":" + text);
}
showMessage("Ann", "hello!");


function showMessage1(from, text){
    from = "*" + from + "*"; // makes from look more nicer
    console.log(from + ":" + text);
}
let from = "Ann";
showMessage1(from, "hello!");
console.log(from); // modified a local copy

/* DEFAULT VALUES */
showMessage("Ann");

function showMessage2(from, text = "no text given"){
    console.log(from + ":" + text);
}showMessage2("Ann");

/* ALTERNATIVE DEFAULT PARAMETERS */
function showMessage3(text){
    if( text === undefined){
        text = 'empty messsage';
    }
    console.log(text);
}
showMessage();