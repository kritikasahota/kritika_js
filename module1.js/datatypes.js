// STRING
let name = "kritika";
console.log(name);
console.log(typeof name);

// NUMBERS
let n = 123;
n = 12.345;
console.log(n);
console.log(typeof n);

// BOOLEAN
let condition = true;
console.log(condition);
console.log(typeof condition);

// BigInt
const bigInt = 1234567890123456789012345678901234567890n; //the "n" at the end means it's a BigInt
console.log(bigInt);
console.log(typeof (bigInt));

// NULL
let value = null;
console.log(value);
console.log(typeof value);

// UNDEFINED
let age;
console.log(age); // shows "undefined"
console.log(typeof value);

// OBJECT
const student = {       // creating an object (use const always)
    fullName: "rahul",
    age: 20,
    cgpa: 8.2,
    isPass: true,
};
console.log(student);
console.log(typeof student);

console.log(student["fullName"]); // accessing keys 1st method
console.log(student.age); //2nd method

// task 1 
const product = {
    productName: "Ball Pen",
    color: "Black",
    rating: 4,
    offer: 5,
    price: 270,
};
console.log(product);

/* task 2 */
const profile = {
    userName: "@shradha khapra",
    followers:569,
    following:4,
    isFollow:true,
};
console.log(profile);