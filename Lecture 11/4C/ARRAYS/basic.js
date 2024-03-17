let arr = [1,2,3,4,5,6,7]

// 1.includes: checks if array has 9 value or not 
console.log(arr.includes(9))
// 2.indexOf: check the index value of 3.
console.log(arr.indexOf(3)); 
// 3. .length:check the length of array.
console.log(`THIS IS A LENGTH OF ARRAY: ${arr.length}`)
// 4.join: changes the array type to string
const newArr = arr.join("and")
console.log(arr);
console.log(newArr);
console.log(typeof newArr)

// 5.array conversion:
console.log(Array.isArray("Shivam")); //Asking is this a array
console.log(Array.from("Shivam")); //Converting string to array

// 6. Array.of: converting array into new array
let num1 = 105;
let num2 = 108;
let num3 = 110;
console.log(Array.of(num1,num2,num3));