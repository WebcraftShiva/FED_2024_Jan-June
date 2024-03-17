//// Promise:
//// It represents a future event.Technically it is a object. When we create a promise object we are not sure weather this promise will be fullfilled or not.Promise has 3 states pending state,fullfiled state and reject state.when we create a promise it is in pending state means it neither fullfilled state or rejected state.

//// 1.1:Create Promise
// const p = new Promise();

//// 1.2:This promise accept 2 callback function

// const p = new Promise((resolve, reject) => {});

////2.Example: Promise:
// let kyaVaadaPooraHua = true;

// let p = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     if (kyaVaadaPooraHua) {
//       resolve("Vaada Poora Kar diya");
//     } else {
//       reject("Aisi Taisi kardi vaade ki");
//     }
//   }, 5000);
// });

////2.1:Consuming Promise:
// p.then(
//   (msg) => {
//     console.log("Message aaya hai", msg);
//   },
//   (err) => {
//     console.log("Error aaya hai", err);
//   }
// );

////2.2:
// p.then(function (msg) {
//   console.log("Message aaya hai", msg);
// }).catch(function (err) {
//   console.log("Error aaya hai", err);
// });

////3.Promise chaining:
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Resolve work after 2 sec");
//   }, 2000);
// });
// p1.then((value) => {
//   console.log(value);
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise 2 working");
//     }, 2000);
//   });
//   return p2;
// })
//   .then((value) => {
//     console.log("Is it DONE!!");
//     return 2;
//   })
//   .then((value) => {
//     console.log("OK now DONE");
//   });

////4: Promise Inside function:
// function maggiLekarAaunga() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       let dukanKhuliHai = true;
//       if (dukanKhuliHai) {
//         resolve("Maggi Mill Gai");
//       } else {
//         reject("Maggi Nahi milli, dukan band hai");
//       }
//     }, 2000);
//   });
// }

// maggiLekarAaunga()
//   .then(function (msg) {
//     console.log(msg);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

//3. Question:
//Create a function downloadMovie which take a arguent url. create a promise where if url is not mp4 reject promise status else resolve status.

// function downloadMovie(url) {
//   return new Promise(function (resolve, reject) {
//     let ext = url.split("/").pop().split(".").pop();
//     if (ext != "mp4") {
//       reject("Abey Sahi URL dede, Bhakk!");
//     } else {
//       setTimeout(function () {
//         resolve(url.split("/").pop());
//       }, 2000);
//     }
//   });
// }

// // downloadMovie function ek promise return krta hai, downloadMovie is a promise
// downloadMovie("myurl.com/avengers.mp3")
//   .then(function (movie) {
//     console.log(movie);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
