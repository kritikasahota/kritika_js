//Write a function that takes a string and returns its length.
let word = (string) => {
    console.log(string.length);
};
word("kritika");

//Write a function that converts a string to uppercase.
let word1 = (string) => {
    console.log(string.toUpperCase());
};
word1("kritika");

//Write a function that returns the first character of a string.
let firstCharacter = (string) => {
    console.log(string[0]);
};
firstCharacter("Kritika");

//Write a function that checks if a string contains the word "hello".

//Write a function that returns the last character of a string.
let lastCharacter = (string) => {
    console.log(string[string.length-1]);
};
lastCharacter("kritika");

//Write a function to reverse a given string.
let String = (str) => {
    let reversedString = " ";
    for(let char of str){
        reversedString = char + reversedString;
    }
    console.log(reversedString);
}
String("kritika");

//Write a function that replaces all spaces in a string with hyphens (-).

//Write a function that counts how many times a specific character appears in a string.

//Write a function that checks if a string starts with a capital letter.
let capitalLetter = (string) => {
    if( string.toUpperCase(0)){
        console.log("yes");
    }else{
        console.log("no");
    };
};
capitalLetter("kritika");

//Write a function that trims whitespace from both ends of a string.
let str = (string)=> {
    console.log(string.trim());
};
str(" hello world ");

//Write a function that capitalizes the first letter of each word in a sentence.
function capitalizeLetter(sentence) {
    let words = sentence.split(" ");
    let capitalizingWord = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
        });
        let result = capitalizingWord.join(" ");
        console.log(result);
    }
capitalizeLetter("hello world from javascript");

//Count the number of characters in a string (excluding spaces).
let numberOfCharacter = (string) => {
    console.log(string.length);
};
numberOfCharacter(" h e l l o ");

//remove all spaces with hyphens.
let str1= (string) => {
    let updated = string.replace(/ /g, "-");
    console.log(updated);
    
}
str1("h e l l o");

//Check if a string includes a given word.
let str2 = "hello world from javascript";
if(str.indexOf("from")){
    console.log("we found it!");
}else{
    console.log("not found");
}

//Count the number of vowels in a string
let str3 = "Tanishka";
let findVowels = str3.match(/[aeiou]/gi);
console.log("vowels found = ",findVowels);

// Check if a string starts with a specific substring.
let str4 = "Hello";
if(str4.startsWith("h")){
    console.log("yes");
}else{
    console.log("no");
}

// Check if a string ends with a specific substring.
let str5 = "Hello";
if(str5.endsWith("o")){
    console.log("yes");
}else{
    console.log("no");
}

// Get the character at a specific index in a string.
let str6 ="Kritika";
let character = str6.charAt(2);
console.log(character);

//Concatenate two strings.
console.log("kritika" + " sahota");

// Find the index of the first occurrence of a character.
 let str7 = "raman" ;
console.log(str7.indexOf("a"));

// Slice the first 3 characters from a string.
console.log(str7.slice(0,3));

// Check if a string is a palindrome.
let string2 = "madam";
let reverse = "";
for(let char of string2){
    reverse = char + reverse;
}
console.log("reverse: ", reverse)
if(string2 === reverse){
        console.log("it's a palindrome");
    }else{
        console.log("it's not a palindrome");
    }

// Find the longest word in a sentence.

// Remove all duplicate characters from a string.

// Replace all vowels in a string with a symbol (e.g., *).

// Count how many times each character appears in a string.

// Check if two strings are anagrams.

// Swap the case of each character (uppercase to lowercase and vice versa).

// Truncate a string and append "..." if it exceeds a certain length.

// Convert a kebab-case string to camelCase.

// Extract the domain from an email address.

// Validate whether a string is a proper email format.


// Convert a sentence into a URL-friendly slug (e.g., "Hello World" → "hello-world").

// Count the number of words in a string.
