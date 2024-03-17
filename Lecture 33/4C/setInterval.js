// setInterval func is used to execute the code repeatedly.

//1.

// setInterval(()=>{
//     console.log("This is a setInterval function inner")
// },2000)

//2.clearInterval:
//stop the interval specified by the setInterval function.

// const inter = setInterval(()=>{
//     console.log("This is a setInterval function inner")
// },2000)
// clearInterval(inter)

//3.

// let count = 0;

// const interval = setInterval(function(){
//     count++;
//     console.log(`Message: ${count}`);
// },1000)
// clearInterval(interval)

// 4:

let count1 = 0;

const interval1 = setInterval(function () {
  count1++;
  console.log(`Message: ${count1}`);

  if (count1 >= 3) {
    clearInterval(interval1);
    console.log("Interval stop after executing 3 times");
  }
}, 1000);
