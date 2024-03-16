// // Console.log undefined reason: Console.log function is being used for logging purpose, but it doesn't return a value. Therefore, when we run console.log, it logs the result but the function call itself doesn't have a return value. so implicitly return undefined.

// console.log(1==1);
console.log(1 == 1);      // true (both values are numerically equal)
console.log(1 == "1");    // true (type coercion: string "1" is coerced to number 1)
console.log(1 == 1.0);    // true (both values are numerically equal)
console.log("" == 0);     // true (type coercion: empty string is coerced to number 0)
console.log(0 == []);      // true (type coercion: empty array is coerced to number 0)
console.log("" == []);     // true (type coercion: empty array is coerced to an empty string)
console.log(" " == 0);     // true (type coercion: string with a space is coerced to number 0)
console.log("" == []);     // true (type coercion: empty array is coerced to an empty string)
console.log(" " == 0);     // true (type coercion: string with a space is coerced to number 0)
console.log(" " == "");    // false (different types: string with a space is not equal to an empty string)
console.log(" " === "");    // false (different types: string with a space is not equal to an empty string)
