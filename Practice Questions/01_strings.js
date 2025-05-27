//Write a function that takes a string and returns the reversed version.
const str = "Kritika";
let reversedStr = "";
for(let char of str) {
    reversedStr = char + reversedStr;
}
console.log(reversedStr);


//Write a function to check whether a given string is a palindrome or not.
const string = "madam";
console.log("string: ",string);
let reversedString ="";
for(let char of string) {
    reversedString = char + reversedString;
}
console.log("reversed string: ",reversedString);
if(string == reversedString){
    console.log("yes it's a palindrome");
} else {
    console.log("no, it's not a palindrome");
}


//Write a function to count the number of vowels (a, e, i, o, u) in a string.
const count_Vowels = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for(let char of str.toLowerCase()){
        if(vowels.includes(char))
            count++;
    }
    console.log("No.of Vowels: ", count);
}
count_Vowels("kritika");


// Given a sentence, return it with the first letter of every word capitalized
const sentence = "ChatGPT can make mistakes.";
const words = sentence.split(" ");
const capatalize = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
});
const result = capatalize.join(" ");
console.log(result);


// Write a function that removes duplicate characters from a string.
const removeDuplicate = (string) => {
    const sorted = string.split('').sort().join('');
    console.log("sorted: ", sorted);
    let result = "";
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (!result.includes(char)) {
            result += char;
        }
    }
   console.log("Without duplicates:", result); 
}
removeDuplicate("banana");


//Write a function to find and return the longest word in a sentence.
function longestWord(sentence){
    const arr = sentence.split(" ");
    if(arr.length === 0){
        return undefined;
    }    
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i].length > max.length){
            max = arr[i];
        }
    }
    console.log("longest word:", max);
    return max;
}
longestWord("start or search a new chat");


