console.log("ถ้าเราต้องการสร้างใช้ constructor ของ obj เราสามารถเขียนแบบนี้ได้ไหม")
console.log("let obj2 = new obj.constructor();")


function OB () {}; 
let obj  = new OB;
let obj2 = new obj.constructor(); // คิดว่าได้
