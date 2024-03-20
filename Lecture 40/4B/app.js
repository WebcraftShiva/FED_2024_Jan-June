// console.log("hello bca");
// setTimeout(() => {
//      console.log("hello piyush");
// }, 5000);
// console.log("hello sweta");


// let ans=document.getElementById("head");
// // console.log(ans);
// ans.innerHTML="Shivam Singh";

async function piyush() {
    // console.log("hello");
   let responce= await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
//    console.log(responce);
  let data=await responce.json();
  console.log(data);
  document.getElementById("head").innerHTML=data.disclaimer;
  document.getElementById("head2").innerHTML = data.bpi.USD.rate;
}
piyush();



