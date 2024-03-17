// Objects can we declared in 2 ways (constructor/ literals)
//when we declared literals way singleton won't make whereas if we create using constructor
//Singleton will be made


// 1. object creation:

// A) constructor: this concept
//object.create

// B) literals
// const user = {
//     name: "Shivam",   // Key-name value-shivam
//     "full name": "Shivam Singh", 
//     age: 24,
//     email: "shivam@gmail.com",
//     location: "chandigarh"
// }

// accesing object value
// console.log(user.name) // we try to avoid this way of excessing value
// console.log(user["email"]) // we use this way to excess object values
// console.log(user["full name"]) // reason for using [] in place of . for accessing value of object.

//changing object value:
// user.email = "shivam@chitkara@gmail.com"
// console.log(user.email)

// // 2.object literals with symbol:

// const mysym = Symbol("Key1")
// const  user1 = {
//     name: "shivam",
//     age: 18,
//     [mysym]: "key1",
//     location: "Chandigarh",
//     email: "shivam@gmail.com"
// }

// // //Excess objects:
// console.log(user1[mysym]);
// console.log(typeof user1[mysym]); // here symbol is not used as symbol it changed to string.
// console.log(user1[mysym]);


// 3.object inside object:
// const detail = {
//     email: "shiva@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "shivam",
//             lastname: "singh"
//         }
//     }
// }

// console.log(detail.fullname.userfullname)
// //to check value pressence in object:
// console.log(detail.hasOwnProperty('email'))

// 4. merging objects:
// const obj1 = { 1: "a", 2: "b"
// }
// const obj2 = { 3: "a", 4: "b"
// }

// const obj3 = Object.assign(obj1,obj2)
// console.log(obj3)

// const obj4 = {...obj1,...obj2}
// console.log(obj3)

// 5. obj use in DB: object in arrray
// const user = [
//     {
//         id: 1,
//         email: "shiv@gmail.com"

//     },
//     {
//         id: 2,
//         email: "shiv@gmail.com"
        
//     },
//     {
//         id: 3,
//         email: "shiv@gmail.com"
        
//     }
// ]
// console.log(user[1].email)
// console.log(Object.values(user))
//  //array with keys can be use to run loop concept to do operation in object keys
// console.log(Object.keys(user))
// console.log(Object.entries(user))




////////////////////////////////////////////////////////////////////////////////////////////////////////

// object destructoring:

const course = {
    coursename: "FrontEnd",
    courseInstructor: "shivam singh"
}
// course.courseInstructor.coursename
const {courseInstructor : instructor} = course
console.log(instructor)

// we use above concept like this in react:
const navbar = ({comapany}) => {

}
navbar(company = "mahindras")