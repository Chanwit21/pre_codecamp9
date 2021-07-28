const express = require('express')
const app = express();

app.get('/',(req, res) => {
    res.send('HTTP From Express')
})

app.listen(3001,()=> console.log('Server Start....'))

// --------------------------------------------------- //

const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
    if(req.url === '/') {
        res.end('HTTP From HTTP')
    }
})

server.listen(8080, ()=>console.log('ServerstartHTTP...'))