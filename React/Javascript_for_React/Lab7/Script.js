// console.log("จากโค๊ดต่อไปนี้มีการสร้าง new Rabbit() ขึ้นมา")
// console.log("function Rabbit() {}")
// console.log("Rabbit.prototype = {")
// console.log("  eats: true")
// console.log("};")
// console.log("")
// console.log("let rabbit = new Rabbit();")
// console.log("")
// console.log("alert( rabbit.eats ); // true")

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// alert( rabbit.eats ); // true

// console.log("ถ้ามีการ alert ในบรรทัดดังกล่าวจะได้อะไรออกมา")
// console.log("function Rabbit() {}")
// console.log("Rabbit.prototype = {")
// console.log("  eats: true")
// console.log("};")
// console.log("")
// console.log("let rabbit = new Rabbit();")
// console.log("")
// console.log("Rabbit.prototype = {};")
// console.log("")
// console.log("alert( rabbit.eats ); // ?")

// function Rabbit() {}

// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype = {};

// alert( rabbit.eats ); //คิดว่าเป็น Undefined แต่เป็น ture เพราะว่า rabbit ถูกกำหนดก่อนเปลี่ยน prototype 

// console.log("ถ้ามีการเปลี่ยนบรรทัดสีเหลืองจะเป็นอย่างไร")
// console.log("function Rabbit() {}")
// console.log("Rabbit.prototype = {")
// console.log("  eats: true")
// console.log("};")
// console.log("")
// console.log("let rabbit = new Rabbit();")
// console.log("")
// console.log("Rabbit.prototype.eats = false;//บันทัดนี้")
// console.log("")
// console.log("alert( rabbit.eats ); // ?")

// function Rabbit() {}

// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype.eats = false;

// alert( rabbit.eats ); // False เพราะมีการแก้ไขในตัว prototype

// console.log("ถ้ามีการเปลี่ยนบรรทัดสีเหลืองจะเป็นอย่างไร")
// console.log("function Rabbit() {}")
// console.log("Rabbit.prototype = {")
// console.log("  eats: true")
// console.log("};")
// console.log("")
// console.log("let rabbit = new Rabbit();")
// console.log("")
// console.log("delete rabbit.eats; //บันทัดนี้")
// console.log("")
// console.log("alert( rabbit.eats ); // ?")

// function Rabbit() {}

// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// delete rabbit.eats; //บันทัดนี้

// alert( rabbit.eats ); // true เพราะว่าใน rabbit ไม่มี key :eats ให้ลบแล้ว

// console.log("ถ้ามีการเปลี่ยนบรรทัดสีเหลืองจะเป็นอย่างไร")
// console.log("function Rabbit() {}")
// console.log("Rabbit.prototype = {")
// console.log("  eats: true")
// console.log("};")
// console.log("")
// console.log("let rabbit = new Rabbit();")
// console.log("")
// console.log("delete Rabbit.prototype.eats; //บันทัดนี้")
// console.log("")
// console.log("alert( rabbit.eats ); // ?")

// function Rabbit() {}

// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// delete Rabbit.prototype.eats;

// alert( rabbit.eats ); // undefined เพราะเป้นการลบไปที่ Prototype ตั้งต้น
