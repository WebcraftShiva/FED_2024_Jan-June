 const greet = (count) =>{
    for(i=0; i< count; i++)
    console.log("Hello World");
}
greet(3)

// 1.for single expression:
const square = (num) => num*num;

//2.for multiple statement:
const squares = (num) =>{
    return num*num;
}
console.log(squares(3))

// 3. Arrow function in array:

// let arr = [2,45,767,35,12]
// arr.forEach((val)=>{
//     console.log(val);
// })