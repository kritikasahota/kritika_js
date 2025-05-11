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
let str1 = (string)=> {
    console.log(string.trim());
};
str1(" hello world ");

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
let str2= (string) => {
    let updated = string.replace(/ /g, "-");
    console.log(updated);
    
}
str2("h e l l o");

//Check if a string includes a given word.
let str = "hello world from javascript";
if(str.indexOf("from")){
    console.log("we found it!");
}else{
    console.log("not found");
}

//Count the number of vowels in a string

// Check if a string starts with a specific substring.

// Check if a string ends with a specific substring.

// Get the character at a specific index in a string.

// Concatenate two strings.

// Find the index of the first occurrence of a character.

// Slice the first 5 characters from a string.

// 🟡 Intermediate-Level JavaScript String Questions
// Capitalize the first letter of each word in a sentence.

// Check if a string is a palindrome.

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

// Reverse the order of words in a sentence.

// Convert a sentence into a URL-friendly slug (e.g., "Hello World" → "hello-world").

// Count the number of words in a string.
