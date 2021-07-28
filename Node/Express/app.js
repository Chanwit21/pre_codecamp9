const express = require('express')
const app = express()

const userRoute = require('./userRoute')
app.use('/user', userRoute)

app.use('/pub', express.static('./public'))
app.get('/', (req, res) => {
    res.redirect('/pub/Form.html')
})

app.get('/sample', (req, res) => {
    res.redirect('/pub/sample.json')
})

app.listen(3001,()=>console.log('Start...'))
