const mu = require('./muUtility')

class Human {
    constructor(_name, _age=mu.getRandom(20,50)) {
        this.name = _name;
        this.age  = _age
    }
    info() { console.log(this.name, this.age)}
}

module.exports.Human =  Human