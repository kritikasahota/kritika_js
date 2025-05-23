const URL = "https://jsonplaceholder.typicode.com/todos/1";
const factPara = document.querySelector("#todos1");
const btn = document.querySelector("#btn");

const getFacts = async () => {
    console.log("getting data...");
    let response = await fetch(URL);
    console.log(response); //JSON Format - like javascript object format
    let data = await response.json(); // json() - changes into readable form
    console.log(data);
    factPara.innerText = data.title;
};
btn.addEventListener("click", getFacts);