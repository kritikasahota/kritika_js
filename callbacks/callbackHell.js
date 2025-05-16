/* CALLBACKS */
function sum(a, b){
    console.log(a + b);
}

function calculator (a, b, sumCallback) {
    sumCallback(a, b);
}
calculator(1, 2, sum);

function hello() {
    console.log("hello");
}
setTimeout(hello, 2000);

/* CALLBACK HELL */
function getData(dataId, getNextData) {
    setTimeout( () => {
        console.log("data", dataId);
        if(getNextData){
        getNextData();
        }
    }, 3000);
}

getData(1, () => {
    console.log("getting data...")
    getData(2, () => {
            console.log("getting data...")
        getData(3, () => {
                console.log("getting data...");
            getData(4);
        });
    });
});