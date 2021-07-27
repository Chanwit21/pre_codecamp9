const Em1 = require('./event1-emit')
const em1 = new Em1()

em1.emit1()
em1.on('onesec',(e)=>[
    console.log(e)
])