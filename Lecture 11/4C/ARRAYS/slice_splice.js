//slice:
let num1 = [1,2,3,4,5,6]
                            // a,a-1
let slicee = num1.slice(1,4); //(index from where you want to slice, upto which element -1) extract element at index 1,2,3 only
console.log(slicee);

//splice: it manipulate original array.
let num2 = [3,5,6,7,8,9]; // a,a

let name = ["Shivam", "Kanav","Lovish","Hridey","Jash","Preet"]
name.splice(1,3,"Singh","Verma")
console.log(name);