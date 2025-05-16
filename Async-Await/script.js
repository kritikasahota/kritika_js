async function hello() {
    console.log("hello");
}

/* ASYNC-AWAIT */
function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("weather report");
        resolve("success");
        },2000);
    });
}

async function getWeatherReport () {
     await api();
}

//example
function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
}

async function getAllData() {
    console.log("getting data1...");
    await getData(1);
    console.log("getting data2...");
    await getData(2);
    console.log("getting data3...");
    await getData(3);
}