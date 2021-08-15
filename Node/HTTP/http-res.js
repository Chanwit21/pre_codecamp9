const http = require("http");
http
  .createServer((req, res) => {
    // res.writeHead(200, {'content-type': 'text/plain'})
    res.writeHead(200, { 
        "content-type": "text/html",            //เอาไว้บอกว่าที่ใส่เข้าไปจะเป็น Tag อะไรได้ ถ้าใช้ text/html
        "Codecamp-9": "five", 
    });
    res.write("This is response message...\n");
    res.write("from your local server\n");
    res.end('<H2> Good Bye </H2>');
  })
  .listen(8080,()=>{console.log('Server start...')});
