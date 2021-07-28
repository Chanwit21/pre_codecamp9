const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require('body-parser');

let data = JSON.parse(fs.readFileSync("./sample.json", "utf8"));
let users = data.users;

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/pub", express.static("./public"));
app.get("/", (req, res) => {
  res.redirect("/pub/Form.html");
});

app.post("/dosearch", (req, res) => {
  console.log(req.body)
  res.send(users.filter((item) => item.firstName.includes(req.body.fname)));
});

app.listen(3001, () => console.log("Server Start...."));
