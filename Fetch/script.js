const URL = "https://cat-fact.herokuapp.com/facts";
const factpara = document.querySelector("#fact")
const button = document.querySelector("#btn");


const getFacts = async () => {
    console.log("getting data")
    let response =  await fetch(URL);
    console.log(response.status);
    let data = await response.json();
    factpara.innerText = data[3].text;
}

button.addEventListener('click',getFacts);



//  with promise chaining 
// function getFacts(){
//     fetch(URL)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         factpara.innerText = data[4].text;
//     })
// }
// button.addEventListener('click',getFacts);
