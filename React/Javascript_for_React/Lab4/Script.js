console.log("ใช้ __proto__ ในการกำหนด prototype object ดังนี้	pockets → bed → table → head.")
console.log("let head = {")
console.log("  glasses: 1")
console.log("};")
console.log("let table = {")
console.log("  pen: 3")
console.log("};")
console.log("let bed = {")
console.log("  sheet: 1,")
console.log("  pillow: 2")
console.log("};")
console.log("let pockets = {")
console.log("  money: 2000")
console.log("};")

let head = {
  glasses: 1
};
let table = {
  pen: 3
};
let bed = {
  sheet: 1,
  pillow: 2
};
let pockets = {
  money: 2000
};

// เข้าใจโจทย์ผิดต้องกลับทิศทางการอ้างอิงกัน
// แบบนี้
// table.__proto__ = head;
// bed.__proto__ = table;
// pockets.__proto__ = bed;
// console.log(pockets.glasses);

//หรือแบบนี้ก็ได้
pockets.__proto__ = bed.__proto__ = table.__proto__ = head;
console.log(pockets.glasses);
