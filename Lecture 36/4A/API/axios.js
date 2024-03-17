
// axios.get('https://jsonplaceholder.typicode.com/todos/1')
//.then((response)=>{
//      console.log(response.data);
// }).catch((err)=>{
//     console.log(err);
// })

async function getData(){
    let response=await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log(response.data);
    }
    let btn= document.querySelector("#btn");
    btn.addEventListener("click", (ev)=>{
     getData();
    })