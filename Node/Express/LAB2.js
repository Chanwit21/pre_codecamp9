// โจทย์ Lab 2
// เปลี่ยนมาทำให้รองรับ Post
// เปลี่ยนมาทำให้รองรับ Put
// เปลี่ยนมาทำให้รองรับ Delete
const express = require('express')
const app = express()

app.get('/',(req, res)=> {
    res.send('Post')
})

app.post('/post',(req, res)=> {
    res.send('Post')
})

app.put('/put',(req, res)=> {
    res.send('Put')
})

app.delete('/del',(req, res)=> {
    res.send('Delete')
})

app.listen(3001, ()=>console.log('Server Star in Port 3001'))