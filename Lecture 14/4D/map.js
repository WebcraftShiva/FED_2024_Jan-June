// map:both forEach and map do the same thing only diff is that map create a new array to perform some operation.

let arr = [22,34,57]

let a = arr.map((value,index,array) => {
    console.log(value, index, array)
    return value * 2;
})
console.log(a)