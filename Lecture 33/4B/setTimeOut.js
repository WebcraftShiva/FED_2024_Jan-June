// setimeout func is used to execute a func after a specified delay

//1.

// function hello(){
//     console.log("This is a inner func")
// }
// setTimeout(hello,2000)

//2.

// setTimeout(()=>{
//     console.log("This is a normal function");
// },2000)

// 3.

// console.log("Started...");

// setTimeout(function(){
//     console.log("There!!");
// },2000);

// console.log("Ends here")

// 4.

console.log("Started...");

let a = setTimeout(function () {
  console.log("This is a setTimeout function");
}, 2000);
clearTimeout(a); //clearTimeout is used to clear all the function working of setTimeout
console.log("Ends here");
