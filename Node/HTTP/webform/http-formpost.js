const http = require("http");
const fs = require("fs");

let postHTML = fs.readFileSync("./http-formpost.html",'utf8');


http
  .createServer((req, res) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    // รอบแรก  เหตุการณื end เกิดขึ้นแน่ๆ เพราะโหลดจบไปแล้ว
    req.on("end", () => {
      body = decodeURI(body)      // ใช้แบบนี้แทน , { "content-type": "text/html; charset=utf8" } ได้ถ้าส่งผ่าน Post แล้วเป็นภาษาที่ไม่ใช้ภาษาไทย
      console.log(`Body : ${body}`);
      res.writeHead(200)
      res.write(`<p> ${body} </p> <hr/>`)
      res.end(postHTML)
    });

  })
  .listen(8080, () => console.log("Sever Strt..."));
