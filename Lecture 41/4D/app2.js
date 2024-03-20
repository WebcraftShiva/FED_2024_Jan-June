async function vikas() {
    let res = await fetch("https://dog.ceo/api/breeds/image/random");
    let data = await res.json();
    console.log(data);
   let ans=document.getElementById("img");
   ans.src=data.message;

}
vikas();