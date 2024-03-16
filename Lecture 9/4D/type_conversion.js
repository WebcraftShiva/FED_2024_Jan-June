console.log(10 + "1");   // Outputs: "101"
// Explanation: String concatenation is performed because one operand is a string.

console.log(10 - "1");   // Outputs: 9
// Explanation: The string "1" is implicitly converted to a number, and subtraction is performed.

console.log(10 + "A" - 1); // Outputs: NaN
console.log(10 + "A");     // Outputs: "10A"
console.log(10 + "A" - 1); // Outputs: NaN
// Explanation: In the first line, the string "A" cannot be converted to a number, resulting in NaN.
// 2nd line perform string concatenation. The third line attempts subtraction on a non-numeric string, resulting in NaN.

console.log("ABC" - 1);   // Outputs: NaN
// Explanation: The string "ABC" cannot be converted to a number, resulting in NaN when trying to subtract 1.

let a = "40";
console.log(typeof a);          // Outputs: "string"
console.log(typeof Number(a));  // Outputs: "number"
console.log(typeof parseInt(a));// Outputs: "number"
// Explanation: The variable 'a' is initially a string. typeof shows the type of 'a', Number() converts it to a number, and parseInt() also converts it to a number.

let b = 10;
console.log(typeof String(b));  // Outputs: "string"
// Explanation: The variable 'b' is a number. typeof String(b) converts it to a string.

console.log(1 + +"1");  // Outputs: 2
// Explanation: The unary plus (+) before the second "1" converts it from a string to a number, resulting in numeric addition.

console.log(10 + +"6"); // Outputs: 16
console.log(10 - +"6"); // Outputs: 4
// Explanation: The unary plus converts the string "6" to a number before performing addition or subtraction.

console.log(+[]);       // Outputs: 0
console.log(+ "");      // Outputs: 0
console.log(+ " ");     // Outputs: 0
// Explanation: The unary plus attempts to convert an empty array or an empty string to a number, resulting in 0.

console.log(+[[[[[]]]]]); // Outputs: 0
console.log(+[[], []]);   // Outputs: NaN
console.log([[], []].toString()); // Outputs: ""
// Explanation: The unary plus attempts to convert nested arrays to a number, resulting in 0 for the first line and NaN for the second line.
// The third line converts the array to a string using toString().
