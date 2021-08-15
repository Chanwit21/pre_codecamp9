const http = require("http");
const fs = require("fs");
const formBody = require('body/form');
const { brotliDecompressSync } = require("zlib");

 
let postHTML = fs.readFileSync("./http-formpost.html");

http
  .createServer((req, res) => {
      if(req.url === '/') {
          return res.end(postHTML)
      }

      formBody(req, res, (err, body) => {
          if(err) {
              res.statusCode = 500
              return res.end("Have error with body..")
          } 

          console.log(body.fname + ' ' + body.lname)
          res.writeHead(200)
          res.write(`<p> ชื่อ : ${body.fname}, นามสกุล : ${body.lname}</p>`)
          res.end(postHTML)
      })
  })
  .listen(8080, () => console.log("Sever Strt..."));
