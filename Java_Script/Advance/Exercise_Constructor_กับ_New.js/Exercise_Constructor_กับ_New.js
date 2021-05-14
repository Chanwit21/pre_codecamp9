console.log("Exercise Constructor กับ New")
console.log("1.สร้าง constructor function ที่ใช้สำหรับสร้าง Calculator โดยต้องมี 3 Methods นี้")
console.log("- read(): รับค่าจาก propmt สองตัว")
console.log("- sum(): ให้คืนค่าจากการบวกกันของตัวแปรสองตัว")
console.log("- mul(): ให้คืนค่าจากการคูณกันของตัวแปรสองตัว")

function Calculator() {
  this.read = function() {
    for (let i = 0; i < 2; i++) {
      this[`num${i+1}`] = +prompt( `Input Number${i+1}`)
    }
  },
  this.sum = function() {
    let sum =0 ;
    for (let i = 0; i < 2; i++) {
      sum = this[`num${i+1}`] + sum;
    }
    return sum;
  },
  this.mul = function() {
    let mul = 1 ;
    for (let i = 0; i < 2; i++) {
      mul = this[`num${i+1}`]*mul;
    }
    return mul;
  }
};

console.log("2.สร้าง constructor function Accumulator(startingValue)")
console.log("- โดยที่ Object ดังกล่าวควร เก็บผลรวมไว้ใน property ที่มี key ชื่อว่า value, ค่าเริ่มต้นของ key ชื่อ value นี้ คือ startingValue")
console.log("- ฟังก์ชัน read() ควรอ่านค่าจาก propmt() และ เพิ่มค่าที่ใส่เข้ามาใน key ชื่อ value")
console.log("พูดง่าย ๆ ก็คือ value คือผลรวมของ prompt โดยเริ่มจาก startingValue")
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    let num = +prompt("Input Your Number :")
    this.value = this.value + num;
    return this.value;
  }
}