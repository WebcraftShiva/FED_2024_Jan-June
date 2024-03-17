// 1. Nested function: 
function outerFunc(){
    console.log("This is a outer function");
    function innerFunc(){
        console.log("This is a inner function");
    }
    innerFunc();
}
outerFunc()

// 2. closure concept: Inner func can access variables and argument of outer 
//func but outer func cannot access values of inner function

function outerFunc(){
    // let a = 40;
    console.log("This is a outer function");
    // console.log(b)

    function innerFunc(){
        // let b = 40;
        console.log("This is a inner function");
        // console.log(a);
        
    }
    innerFunc();
}
outerFunc()



// Calculate grade based on marks:

// function calculateGrade(marks) {
//     let grade;

//     if (marks >= 90) {
//         grade = 'A';
//     } else if (marks >= 80) {
//         grade = 'B';
//     } else if (marks >= 70) {
//         grade = 'C';
//     } else if (marks >= 60) {
//         grade = 'D';
//     } else {
//         grade = 'F';
//     }

//     return grade;
// }

// let userInput = prompt('Enter the student\'s marks:');

// let marks = parseFloat(userInput);

// if (!isNaN(marks)) {
//     let result = calculateGrade(marks);
//     console.log(`The student's grade is: ${result}`);
// } else {
//     console.log('Invalid input. Please enter a valid number for marks.');
// }
