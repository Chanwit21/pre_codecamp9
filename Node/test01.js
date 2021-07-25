// OS
const os = require("os");
// file
const fs = require("fs");
const { ok } = require("assert");

// tmem = os.totalmem()
// fmem = os.freemem()

// // console.log(`Total meme = ${tmem} and Free mmemory = ${fmem}`)
// // console.log(`Uses Memmory = ${tmem-fmem}`)
// console.log(os.version())
// console.log(os.hostname())

// // Read File Sync
// const read = fs.readFileSync('./redme.txt')
// console.log(read)
// console.log(read.toString())
// console.log('Reading .....')

// // Read File Async
// fs.readFile('./redme.txt',(err,data) => {
//     if(err) throw err;
//     console.log(data)
//     console.log(data.toString())
//     console.log('Done.....')
// })
// console.log('Reading .....')

// // Async VS Sync (Blocking And NonBlocking)
// for (let i = 0; i < 20; i++) {
//   //   fs.readFile("./codecamp.txt", (err, data) => {
//   //     if (err) throw err;
//   //     console.log(data.toString());
//   //   });
//   //   fs.readFile("./codecamp1.txt", (err, data) => {
//   //     if (err) throw err;
//   //     console.log(data.toString());
//   //   });

//   const d1 = fs.readFileSync("./codecamp.txt", "utf8");
//   const d2 = fs.readFileSync("./codecamp1.txt", "utf8");
//   console.log(d1);
//   console.log(d2);
// }
// // ?Eaxmple
// function addSync(a, b) {
//   return a + b;
// }
// let sum = addSync(1, 2);
// function add(a, b, callbackFunction) {
//   callbackFunction(null, a + b);
// }
// let sum2;
// add(1, 2, (err, returnValue) => {
//   sum2 = returnValue;
// });
// console.log(sum);
// console.log(sum2);
// Example 2
// let callbackValue;
// function hello4(err, value) {
//   callbackValue = value;
// }
// function tryHello4(callbackFunction) {
//   let returnValue = 'returnValue';
//   let callbackValue = 'callbackValue';
//   callbackFunction(null, callbackValue);
//   return returnValue;
// }
// console.log(tryHello4(hello4)); // print returnValue
// console.log(callbackValue); // print callbackValue
// Example 3
// function dropBall(beofore,after){
//     beofore()
//     console.log('catch Ball')
//     console.log('release')
//     after()
// }

// function buyBall () {
//     console.log('Buy Ball')
// }

// function kickBall () {
//     console.log('Kick Ball')
// }
// dropBall(buyBall,kickBall);
// dropBall(kickBall,buyBall);

// Call back Hell
// fs.readFile('f01.txt', 'utf-8', (err, data) => {
//   fs.readFile(`${data}`, 'utf-8', (err, data) => {
//     fs.readFile(`${data}`, 'utf-8', (err, data) => {
//       fs.readFile(`${data}`, 'utf-8', (err, data) => {
//       console.log(data)
//     })
//     })
//   })
// })

// Set Time Out
// setTimeout(()=> console.log('A'),1000)
// setTimeout(()=> console.log('B'),500)
// setTimeout(()=> console.log('C'),200)

// Promise
// let done = true;

// const isItDoneYet = new Promise((resolve, reject) => {
//   if (done) {
//     const workDone = "Here is the thing I built";
//     resolve(workDone);
//   } else {
//     const why = "Still working on something else";
//     reject(why);
//   }
// });

// const checkIfItDone = () => {
//   isItDoneYet
//   .then((ok) => {
//     console.log("come from reslove stage in Promist");
//     console.log(ok);
//     done = done ? false:true;
//   })
//   .catch( err => {
//       console.log('come from stage in Promist')
//       console.log(err)
//   })
// };
// checkIfItDone()

// Promise
// console.log("1");
// new Promise((reslove) =>
//   setTimeout(() => {
//     console.log("2");
//     reslove();
//   }, 1000)
// ).then(() => {
//   new Promise((reslove) =>
//     setTimeout(() => {
//       console.log("3");
//       reslove();
//     }, 1000)
//   ).then(() => {
//     setTimeout(() => {
//       console.log("4");
//     }, 1000);
//   });
//   // console.log('3')
// });
// Promist To Function
// function showText(text, time) {
//   return new Promise((reslove) => {
//     console.log(text);
//     setTimeout(() => reslove(), time);
//   });
// }
// showText("1", 1000)
//   .then(() => showText("2", 1000))
//   .then(() => showText("3", 1000))
//   .then(() => showText("4", 1000))
//   .then(() => console.log("Done...."));

// PRomise TO FIX Confuse Callback Hell
// const getFile = (fileName) => {
//     return new Promise((resolve,reject) => {
//         fs.readFile(fileName,'utf8',(err,data) => resolve(data))
//     })
// }
// getFile('./f01.txt')
// .then (data=>{
//     console.log(data)
//     return getFile(data)})
// .then (data=>{
//     console.log(data)
//     return getFile(data)})
// .then (data=>{
//     console.log(data)
//     return getFile(data)})
// .then (data=>{
//     console.log(data)
//     return getFile(data)})

// Promist CAllback Function
function readMessage() {
  return new Promise(function (fulfill, reject) {
    fs.readFile("message.txt", "utf8", function (err, res) {
      if (err) reject(err);
      else fulfill(res);
    });
  });
}
function writeMessage(dat) {
  return new Promise(function (fulfill, reject) {
    fs.writeFile("out.txt", dat, function (err) {
      if (err) reject(err);
      else fulfill(res);
    });
  });
}
readMessage()
  .then(writeMessage)
  .then(function () {
    console.log("success");
  });
