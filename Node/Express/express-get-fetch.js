const express = require('express')
const app = express()
const fs = require('fs')
const fetch = require('node-fetch')


let url = 'https://covid19.th-stat.com/json/covid19v2/getTodayCases.json'
let data
(async () => {
  try {
    const res = await fetch(url)
    data = await res.json();
    // console.log(d)
    // console.log(res)
  } catch (err) {
    console.log(err)
  }
})()

app.get('/list', (req, res) => {
    res.send(data)
})

app.get('/listname', (req, res) => {
    let outHTML = '<ul>'
    for(let key in data) {
        outHTML += `<li> ${key} : ${data[key]} </li>`
    }
    outHTML += '</ul>'
    res.send(outHTML)
})

app.listen(3001, ()=> console.log('Server Start....'))