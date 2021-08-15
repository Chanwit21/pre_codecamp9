const EventEmitter = require('events')

const em1 = new EventEmitter()
const em2 = new EventEmitter()
// console.log(em1)

setInterval( ()=> em1.emit('onesec', {id:1,txt:'One Secound...'}) , 1000)
setInterval( ()=> em1.emit('twosec') , 2000)

// คนที่จะ Check Event ได้ต้องเป็น Instance(em) ตัวเดียวกัน
em1.on('onesec', function(e) {
    console.log(`id is ${e.id}, txt is ${e.txt}`)
})

em2.on('onesec',function(e) {
    console.log(`id is ${e.id}, txt is ${e.txt}`)
})

// em1.on('twosec', function() {
//     console.log('Two Secound')
// })