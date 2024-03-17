//1. Call Back:
// let arr = [1,23,4,46,37]

// arr.forEach(myfunc);  // function calls
// function myfunc(val,index,arr){
//     console.log(val)
// }

//2.
const cal = (a, b, operation) => {
  return operation(a, b);
};

const result = cals(3, 4, function (num1, num2) {
  return num1 + num2;
});
console.log(result);
