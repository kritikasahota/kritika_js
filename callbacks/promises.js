// let promise = new Promise((resolve, reject) => {
//     console.log("I am a Promise.");
//     resolve("success");
// //   reject("some error");
// })

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
        console.log("data", dataId);
        resolve("success");
        //reject("some error");
        if(getNextData) {
        getNextData();
        }
      }, 3000);
   });
}


/* METHOD 1 */
const getPromise = () => {
    return new Promise((resolve, reject) =>{
        console.log("I am a Promise");
        resolve("success");
    });
}

let promise1 = getPromise();
promise1.then((res) => {
    console.log("promise fullfilled");
});


/* METHOD 2 */
const getPromise_ = (err) => {
    return new Promise((resolve, reject) =>{
        console.log("I am a Promise");
        reject("some error");
    });
}
let promise2 = getPromise_();
promise2.catch(() => {
    console.log("rejected");
});


/* PROMISE CHAINING */
function asyncFunc1 () {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
          console.log("data1");
          resolve("success");
        }, 4000);
    });
}

function asyncFunc2 () {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
          console.log("data2");
          resolve("success");
        }, 4000);
    });
}

console.log("fetching data1...");
asyncFunc1().then((res) => {
    console.log("fetching data2...");
    asyncFunc2().then((res) => {
   });
});

