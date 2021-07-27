const EventEmitter = require('events')

class Em1 extends EventEmitter {
    constructor(props) {
        super(props)
    }
    emit1() {
        setInterval( ()=> this.emit('onesec', 55555) , 1000)
    }

    emit2() {
        setInterval( ()=> this.emit('twoceg', 22222) , 2000)
    }
}

module.exports = Em1;
// ถ้า extends มาจากตัว EventEmitter ต้อง Export Module แบบนี้
