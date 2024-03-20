// 3. promises:

const cart = ["shoes","pants","kurtas","ring"]

const order = new Promise((resolve,reject)=>{
    if(
        cart.includes("shirt") && cart.includes("shoes") && cart.includes("rings")
    ) {
        resolve("Item ordered");
    }else{
        reject("Item not present order cancelled");
    }
});

order.then((data) =>{
    console.log("Order placed successful", data)
}, (error)=>{
    console.log(error)
})



// // 2.call back working:
// const cart = ["shoes","pants","kurtas"]

// //1.create order
// //2.proceed to payment
// //3. proceed to order summary
// //4. walled updated


// api.createOrder(cart,function(){
//     api.proceedToPayment(function(){
//         api.orderSummary(function(){
//             api.wallet();
//         });
//     })
// });





//1. simple function:

// function addNumbers(a, b) {
//     return a * b;
// }
// var result = addNumbers(5, 3);
// console.log("SUM" + result);

