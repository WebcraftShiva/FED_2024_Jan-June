//1.
// fetch(url).then((data)=>{
//     console.log(data);
//     return data.json();
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })
//2.
// let url="https://jsonplaceholder.typicode.com/todos/1";
// fetch(url).then((data)=>{
//     console.log(data);
//     return data.json();
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

//3.
// aysnc /await
// let url="https://jsonplaceholder.typicode.com/todos/1";
// async function getData(){
//     let data=await fetch(url);
//    let resultdata= await data.json();
//    console.log(resultdata);
// }
// getData();

//4:
let url="https://swapi.dev/api/people/1"
let container=document.querySelector(".container");
fetch(url)
.then((data)=>data.json())
.then((data)=>{
    console.log(data);
})
async function getStarwarsdata(){
   let data=await fetch(url)
   let resultdata=await data.json();
   console.log(resultdata);
   showData(resultdata);
}
getStarwarsdata();

function showData(data){
    container.innerHTML="";
    let div=document.createElement("div");
    div.innerHTML=`<div class="name">${data.name
    }</div>
    <div class="gender">${data.gender}</div>
    <div class="height">${data.height}</div>`
    container.append(div);
}

//5.
// const url = 'https://realty-in-us.p.rapidapi.com/locations/v2/auto-complete?input=new%20york&limit=10';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '0c893a078dmsh85e35574789241cp12208ejsn1b775fc48d9f',
// 		'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
// 	}
// };
// async function getData(){
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// }
// getData();