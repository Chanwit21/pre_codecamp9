const http = require('http')

// Use To Function
function app(req,res) {
    console.log('request coming...')
        res.writeHead(200, {'Content-type' : 'text/html'})
        res.write('Hello, world')
        res.end()
}

http.createServer(app).listen(8080)

// REfactor
// http.createServer((req, res) => {
//     console.log('request coming...')
//     res.writeHead(200, {'Content-type' : 'text/html'})
//     res.write('Hello, world')
//     res.end()
// }).listen(8080)


// // Non Refactor 
// const server = http.createServer()
// server.on((req, res) => {
//     console.log('request coming...')
//     res.writeHead(200, {'Content-type' : 'text/html'})
//     res.write('Hello, world')
//     res.end()
// })

// server.listen(8080)