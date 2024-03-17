//forIn : Used for iterate over the properties of an object one by by one. Don't guaranty order if used with array. Not idea for array.

const students = ["Shivam","Ram","Kanav","Lovish"]

for (let index in students) {
    console.log(index, students[index]);
}
