const fetch = require("node-fetch");

// Learn
// Fetch
// let url = 'https://covid19.th-stat.com/json/covid19v2/getTodayCases.json'
// let d

// fetch(url)
// .then( Res => {
//     return Res.json();
// } )
// .then ( data => {
//     d = data;
//     console.log(data);
// }) .catch(err => {
//     console.log('incomplete fetch :' + err)
// })
// Refactor Fetch
// let url = 'https://covid19.th-stat.com/json/covid19v2/getTodayCases.json'
// let d

// fetch(url).then( Res => Res.json()).then ( data => {
//     d = data;
//     console.log(data);
// }) .catch(err => console.log('incomplete fetch :' + err))

// ASync Await Fetch
// let url = 'https://covid19.th-stat.com/json/covid19v2/getTodayCases.json'
// let d
// async function runFetch() {
//   try {
//     const res = await fetch(url)
//     const data = await res.json();
//     d = data;
//     console.log(data)
//     // console.log(res)
//   } catch (err) {
//     console.log(err)
//   }
// }

// runFetch()

// IIFE ANd refactor
let url = 'https://covid19.th-stat.com/json/covid19v2/getTodayCases.json'
let d
(async () => {
  try {
    const res = await fetch(url)
    d = await res.json();
    console.log(d)
    console.log(res)
  } catch (err) {
    console.log(err)
  }
})()

// Async  Fetch And Edit DOM
// function addTag(label, content) {
//   let p = document.createElement('p');
//   p.innerText = `${label} : ${content}`
//   document.body.append(p)
// }

// let url = 'https://covid19.th-stat.com/json/covid19v2/getTodayCases.json'
// let d
// (async () => {
//   try {
//     const res = await fetch(url)
//     d = await res.json();
//     // console.log(d)
//     for(let [key,value] of Object.entries(d)) {
//       addTag(key, value)
//     }
//     // console.log(res)
//   } catch (err) {
//     console.log(err)
//   }
// })()
// let d = {
//   Confirmed: 512678,
//   Recovered: 341475,
//   Hospitalized: 167057,
//   Deaths: 4146,
//   NewConfirmed: 15376,
//   NewRecovered: 6782,
//   NewHospitalized: 8507,
//   NewDeaths: 87,
//   UpdateDate: '26/07/2021 12:30',
//   DevBy: 'https://www.kidkarnmai.com/'
// }

// console.log(d)

// for(let [key,value] of Object.entries(d)) {
//   addTag(key, value)
// }

// // Exercise
// async function getUser() {
//   try {
//     const response = await fetch("https://randomuser.me/api");
//     const data = await response.json();
//     console.log(response.status);
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// getUser()

// async function getText() {
//   try {
//     const response = await fetch(
//       "https://mdn.github.io/fetch-examples/fetch-text/"
//     );
//     const data = await response.text();
//     console.log(response.status);
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// // getText()

// async function getImg() {
//   try {
//     const response = await fetch(
//       "https://mdn.github.io/fetch-examples/basic-fetch/"
//     );
//     const data = await response.text();
//     console.log(response.status);
//     console.log(response);
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// getImg();
