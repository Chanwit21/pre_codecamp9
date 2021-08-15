const mc = require('./MyClass')
const mu = require('./muUtility')

const customer = new mc.Human('Andy')
console.log(customer)

const employee = new mc.Human('Bobby', 25)
console.log(employee)
employee.info()