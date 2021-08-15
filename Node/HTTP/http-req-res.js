const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "content-type": "text/html; charset=utf8",
    });
    // res.statusCode = 200
    // res.setHeader('content-type', 'text/html')

    if (req.url === "/") {
      res.write(" <h2> This is Home Page </h2>");
      for (let i = 0; i < 6; i++) {
        res.write(`<h${i}> ยินดีต้อนรับ </h${i}>`);
      }
      return res.end(); // ถ้าไม่มี รีเทิร์นแล้วมี Write ข้างล่างจะ Error
    }

    if (req.url === "/user") {
      res.write(" <h2> This is User Page </h2>");
      return res.end(); // ถ้าไม่มี รีเทิร์นแล้วมี Write ข้างล่างจะ Error
    }

    function form(req, res) {
      res.write(`
        <!DOCTYPE html>
          <html>
          <body>
  
          <h2>HTML Forms</h2>
  
          <form action="/action_page.php">
            <label for="fname">First name:</label><br>
            <input type="text" id="fname" name="fname" value="John"><br>
            <label for="lname">Last name:</label><br>
            <input type="text" id="lname" name="lname" value="Doe"><br><br>
            <input type="submit" value="Submit">
          </form> 
  
          <p>If you click the "Submit" button, the form-data will be sent to a page called "/action_page.php".        </p>
  
          </body>
          </html>
          `);
      res.end();
    }

    if (req.url === "/form") {
      return form(req, res);
    }

    if (req.url === "/page1") {
      res.write(`
        <!DOCTYPE html>
            <html>
            <body>

            <h1 style="background-color:DodgerBlue;">Hello World</h1>

            <p style="background-color:Tomato;">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt           ut laoreet dolore magna aliquam erat volutpat.
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut          aliquip ex ea commodo consequat.
            </p>

            </body>
            </html>
        `);
      return res.end();
    }

    res.writeHead(404, "Not Found in our site...", {
      "content-type": "text/html",
    });
    res.end("<hr/> <h3>Not Found</h3>");

    // ถ้า setHeader ทีหลัง writhead จะมีปัญหา
    // res.statusCode = 404
    // res.statusMessage = "Not Found in our site..."
    // res.setHeader('content-type', 'text/html')
    // res.write(res.statusMessage)
    // res.end("<hr/> <h3>Not Found</h3>");
  })
  .listen(8080, () => console.log("Server start..."));
