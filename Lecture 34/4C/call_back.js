//1.simple function:

// function first() {
//   console.log("This is a first function");
// }

// function second() {
//   console.log("This is a second function");
// }

// //call:
// first();
// second();

//2. callback:
function first() {
  console.log("This is a first function");
}
function second(call) {
  console.log("This is a second function");
  call();
}
second(first); // callback: calling 1st inside 2nd function
