/* SYNTAX */
// for ( let key in objVar){
//     //do some work
// }

let student = {
    name : "Rahul Kumar",
    age: 19,
    cgpa : 7.5,
    isPass: true,
};
for(let i in student){
    console.log("i =  ", i);
}