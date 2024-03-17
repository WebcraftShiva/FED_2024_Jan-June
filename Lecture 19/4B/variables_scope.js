// /*
// var:Not a Blocked scope,function scope,global scope, redeclaration and updatation is possible
// let:Blocked scope,not a functional scope, can't be redeclaration , but variable updation is possible
// const:Blocked scope,not a functional scope, can't be redeclaration and updated
// */

// // 1. simple variable declaration:

// let a =  10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// // 2. Blocked scope: checking let var const one by one


// {
//     //let a =  10;
//     // const b = 20;
//     var c = 30;
// }
// console.log(c);

// // 3.functional scope

// // function scope(){
// //     if(true) {
// //         const a = 20;
// //         console.log(a)
  
// //     }
// //     console.log(a)
    
// // }
// // scope()

// // 4. global scope and functionl scope:

var a = 10;
function scope(){
    var b = 20;
    if(true) {
        var c = 30;
        console.log(a)
        console.log(b)
        console.log(c)
    }
}
scope()
console.log(c)

