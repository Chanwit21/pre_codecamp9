console.log("สร้าง object rabbit ด้วย new keyword")
console.log("function Rabbit(name) {")
console.log("  this.name = name;")
console.log("}")
console.log("Rabbit.prototype.sayHi = function() {")
console.log("  alert(this.name);")
console.log("};")
console.log("")
console.log("let rabbit = new Rabbit(\"Rabbit\");")
console.log("")
console.log("คำสั่งทั้งหมดนี้ทำงานเหมือนกันหรือไม")
console.log("rabbit.sayHi();")
console.log("Rabbit.prototype.sayHi();")
console.log("Object.getPrototypeOf(rabbit).sayHi();")
console.log("rabbit.__proto__.sayHi();")

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

// rabbit.sayHi();                          //ได้ alert Rabbit
// Rabbit.prototype.sayHi();                //ได้ alert undefined เพราะใน Rabbit.prototype ไม่รู้ว่าจะชี้ this ไปที่ไหน
// Object.getPrototypeOf(rabbit).sayHi();   //ได้ alert Rabbit ต้องได้ alert undefined เพราะ Object.getPrototypeOf(rabbit) = Rabbit.prototype
// rabbit.__proto__.sayHi();                //ได้ alert Rabbit ต้องได้ alert undefined เพราะ rabbit.__proto__ = Object.getPrototypeOf(rabbit) = Rabbit.prototype