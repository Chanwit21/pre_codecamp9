// Promise All

// function randomInt(min,max) {
//     return Math.floor(Math.random()*(max-min))+min;
// }

// const pm1 = new Promise((rsv,rj) => {
//     let n = randomInt(1,9)
//     if( n < 7 ) rsv(n)
//     rj(n)
// })
// const pm2 = new Promise((rsv,rj) => {
//     let n = randomInt(1,9)
//     if( n < 7 ) rsv(n)
//     rj(n)
// })
// const pm3 = new Promise((rsv,rj) => {
//     let n = randomInt(1,9)
//     if( n < 7 ) rsv(n)
//     rj(n)
// })

// Promise.all([pm1, pm2, pm3]).then( r =>{
//     console.log('Pass All')
//     console.log(r)
// }).catch( e => {
//     console.log('Not Pass')
//     console.log(e)
// })

// Refactor

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function pmRandom() {
  return new Promise((rsv, rj) => {
    let n = randomInt(1, 9);
    if (n < 7) rsv(n);
    rj(n);
  });
}

const pm1 = pmRandom();
const pm2 = pmRandom();
const pm3 = pmRandom();

Promise.all([pm1, pm2, pm3])
  .then((r) => {
    console.log("Pass All");
    console.log(r);
  })
  .catch((e) => {
    console.log("Not Pass");
    console.log(e);
  });
