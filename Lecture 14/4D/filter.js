// filter: also don't chnage originl array values
let arr = [1,23,47,85];

 let a = arr.filter((a)=> {
    return a < 10;
})
console.log(a);