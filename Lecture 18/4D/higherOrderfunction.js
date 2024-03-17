// Higher order function is a function that take another function as an argument or 
//return another function as a higher order function.


// 1. 
// function func(){   //func is a callback function
//     console.log("Function 1");
// }

// function myfunc(func){   //myfunc is a higher order function which is taking x as an argument
//     x();
// }

// 2.
const radius  = [1,2,3,4];

const circleArea = function(){
    const output =[];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}
console.log(circleArea(radius));