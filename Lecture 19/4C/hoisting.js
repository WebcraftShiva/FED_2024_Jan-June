//2.
function hoistingEx() {
    console.log(x);
    var x = 10;
    console.log(x); 
    
    console.log(foo()); 
    function foo() {
        return "Function declaration.";
    }
    console.log(foo()); 

    console.log(bar);
    var bar = function() {
        return "Function expression.";
    };
    console.log(bar()); 
}
hoistingEx();



//1.
// console.log(x); // undefined
// var x = 5;

// console.log(y); // Reference Error: y cannt be accessed before initialisation
// let y = 10

// console.log(z); // Reference Error: z cannt be accessed before initialisation
// const z = 20;
