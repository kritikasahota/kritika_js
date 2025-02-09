// IF STATEMENT
// let age = 25;
// if( age >= 18)
// {
//     console.log("you can vote");
// }

let mode = "dark";
let color;
if( mode === "dark"){
    color = "black";
}

if( mode === "light"){
    color = "white"
}

console.log(color);

// IF-ELSE STATEMENT

let age = 25;
if(age >= 18){
    console.log("you can vote");
}
else {
    console.log("you cannot vote");
}


if(5 % 5 === 0){
    console.log("number is even");
}
else{
    console.log(" number is odd");
}


//ELSE-IF STATEMENT
if(age <= 18){
    console.log("junior");
}else if(age = 60){
    console.log("senior");
}else{
    console.log("middle");
}

// SWITCH STATEMENT
let grade = 180 ;
switch(true ){
    case (grade>=80 && grade<=100):
        console.log("A");
        break;

        case (grade>=70 && grade<=89):
            console.log("B");
            break;

            case (grade>=60 && grade<=69):
                console.log("C");
                break;

                case (grade>=50 && grade<=59):
                    console.log("D");
                    break;

                    case (grade>=0 && grade<=49):
                        console.log("F");
                        break;

                        default:
                            console.log("error");

}