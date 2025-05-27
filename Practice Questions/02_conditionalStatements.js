//Write a function that checks whether a number is even or odd.
const checker = (number)=> {
    if(number % 2 == 0){
        console.log("it's even");
    } else {
        console.log("it's odd");
    }
}
checker(16);


//Write a function that returns a letter grade based on a numeric score (A, B, C, D, F).
const grade = (num) => {
    if(num>= 80 && num<=100){
        console.log("grade:A");
    }else{
        if(num>=70 && num<=79){
        console.log("grade:B");
        }else{
            if(num>= 60 && num<=69){
            console.log("grade:C");
            } else{
                if(num>= 50 && num<=59){
                console.log("grade:D");
                } else{
                    console.log("grade:F");
                }
            }
        }
    }
}
grade(75);


//Write a function that checks if a given year is a leap year.
const leapYear = (year) => {
    if(year % 4 === 0){
        console.log("It's a leap year");
    }else{
        console.log("no, it's not a leap year");
    }
}
leapYear(2008);


// Write a function that returns the largest of three numbers using if-else
const compare = (A, B, C) => {
    if(A>B && A>C){
        console.log("A is greater")
    }else{
        if(C>B){
            console.log("C is greater");
        } else {
            console.log("B is greater");
        }
    }
}
compare(4, 6, 5);


// Write a function to check if a number is positive, negative, or zero.
function typeOfNumber(num) {
    if(num > 0){
        console.log("POSITIVE");
    } else{
        if(num<0){
            console.log("NEGATIVE");
        } else{
            console.log("ZERO");
        }
    }
}
typeOfNumber(0);


//Input a character and return whether it is a vowel or a consonant
function typeOfCharacter(char) {
    if(char.match(/[aeiou]/gi)){
        console.log("VOWEL");
    } else{
        console.log("CONSONANT");
    }
}
typeOfCharacter("m");