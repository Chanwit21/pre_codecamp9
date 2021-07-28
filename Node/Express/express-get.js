const express = require("express");
const app = express();
const fs = require("fs");

let data = JSON.parse(fs.readFileSync("./sample.json", "utf8"));
let user = data.users;
let listCounter = 0;

app.use('/list', (req, res, next) => {
    console.log(`Request to /list number : ${++listCounter}`)
    next()
})

app.get("/list", (req, res) => {
  res.send(user);
});

app.get("/search", (req, res) => {
  res.send(user.find((item) => item.firstName === req.query.uname));
});

app.get("/users/:uid/:eid", (req, res) => {
  let result = [];
  for (
    let i = parseInt(req.params.uid) - 1;
    i < parseInt(req.params.eid);
    i++
  ) {
    result = [...result, user[i]];
  }
  res.send(result);
});

app.get("/usermane/:uname", (req, res) => {
  res.send(user.find((item) => item.firstName === req.params.uname));
});


app.get("/listname", (req, res) => {
  let outHTML = "<ol>";
  user.forEach((x) => {
    outHTML += `<li> ${x.firstName} ${x.lastName} <b> ${x.emailAddress} </b> </li>`;
  });
  outHTML += "</ol>";
  res.send(outHTML);
});

app.listen(3001, () => console.log("Server Start...."));
