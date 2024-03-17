// 1.this in global space:
//Global space means global place where you write your code.
//In global space this always have a value of global object. This global space can be different depending on runtime environment where we trying to run this. But in browser global object is window and for NodeJs it will be global.
"use strict";
console.log(this);

// 2.this inside a function:
function x() {
  console.log(this); // this value depends on strict and unstrict mode.
}
x();

// 3.this value depends on how the function is called.
// window.x();

// 4.this inside a object: function inside a object is called object method.

const obj = {
  a: 10,
  b: function () {
    console.log(this); // value of this inside this method is object
    console.log(this.a); // here this is refering to obj and .a is refering to the value of a inside a object.
  },
};
obj.b();

// 5.Important methods on this:
//sharing method: means if we want to share one object method to another object there is a way to do that using call apply and bind method. By using these method we try to override the value of this that we have used inside a object method. In order to use it inside another object.

// let student1 = {
//   name: "Yash",
// };
// let state = function (state1, state2) {
//   console.log(this.name);
//   student1.state();
// };
// state.apply(student1, ["mumbai", "dehradun"]);

// let student2 = {
//   name: "Rich",
// };

// state.apply(student2, ["mumbai", "Uttar pradesh"]); // apply we pass argument as array list only difference

// 6. this inside a array: array dont have this. They take the value of there lexical environment where they are inclosed.
const num = {
  a: 10,
  x: () => {
    console.log(this);
  },
};
num.x();

// 7. this inside a dom:

//7.
