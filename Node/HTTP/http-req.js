const http = require("http");
const server = http.createServer();

server.on('request', (req, res) => {
    const {headers, method, url, httpVersion} = req
  console.log(headers.host);
  console.log(httpVersion);
  console.log(method);
  console.log(url);
});


server.listen(8080)