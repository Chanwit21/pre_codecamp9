const express = require("express");
const app = express();
const fs = require("fs");

let data = JSON.parse(fs.readFileSync("./sample.json", "utf8"));
let users = data.users;

app.get('/search', (req, res) => {
    let formHTML = `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Form express</title>
        </head>
        <body>
            <form action="/dosearch" method="get">
            <label for="fname">First name</label>
            <input type="text" name="fname" id="fname" placeholder="First Name">
            <input type="submit" value="Submit" />
            </form>
        </body>
        </html>
    `
    res.send(formHTML)
})

app.get('/dosearch', (req, res) => {
    res.send (users.filter( item => item.firstName.includes(req.query.fname)))
})

app.listen(3001, () => console.log("Server Start1...."));
