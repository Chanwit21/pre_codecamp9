module.exports.getRandom = function getRandom(min,max) {
    return Math.floor(Math.random()*(max-min+1)) + min;
}
let pi = Math.PI

exports.circleArea = function circleArea(r=1) {
    return pi*r*r;
}

exports.squareArea = (length,height)=>{
    return length*height
}

const user = {
    name:'John',
    age:30
}

module.exports.pi = pi
module.exports.user = user
// module.exports.getRandom = getRandom //export c[[ouhdHwfh]]