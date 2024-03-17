// 1.simple for loop:
let num = [1,2,3,4,5,6]
// for( i = 0; i<num.length; i++){
//     console.log(i)
// }

// 2. forEach loop:
num.forEach((element) =>{
    console.log(element * element)
})

// 3. Array.from: create a new array from the existing array
let name = "shivam";
let arr = Array.from(name)
console.log(arr)

// 4. for..of:Use for excess a element of array
for( let i of num){
    console.log(i)
}

// 5. for..in: gives key-value of the array
for( let i in num){
    console.log(i)
}