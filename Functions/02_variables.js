/* LOCAL VARIABLES */
function showMessage(){
       let message = "Hello, I'm JavaScript"; // local variable
       console.log(message);
}

showMessage();


/* OUTER VARIABLE */
let userName = 'John';

function show_Message(){
    //userName = Bob; // can updated the outer variable
    let message = 'hello,' + userName;
     console.log(message);
}

show_Message();