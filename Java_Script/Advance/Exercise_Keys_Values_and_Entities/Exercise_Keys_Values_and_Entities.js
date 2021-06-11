console.log("Exercise Keys, Values และ Entities")
console.log("1. กำหนดให้ salaries เป็น Object ให้เขียนฟังก์ชัน sumSalaries(salaries) ที่คืนค่าเป็นผลผมรวมของเงินเดือน ")
console.log("ถ้า salaries ไม่มีสมาชิก ให้คืนค่าเป็น 0")
console.log("let salaries = {")
console.log("  \"John\": 100,")
console.log("  \"Pete\": 300,")
console.log("  \"Mary\": 250")
console.log("};")
console.log("")
console.log("alert( sumSalaries(salaries) ); // 650")
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
function sumSalaries(obj) {
  let result = 0;
  for (let value of Object.values(obj)){
    result = result + value;
  }
  return result;
}

// console.log("2.ให้เขียนฟังก์ชัน count(obj) ที่คืนค่าเป็นจำนวน properties ใน object")
// console.log("let user = {")
// console.log("  name: 'John',")
// console.log("  age: 30")
// console.log("};")
// console.log("")
// console.log("alert( count(user) ); // 2")
// let user = {
//   name: 'John',
//   age: 30
// };

// function count(obj) {
//   let count = 0;
//   for (i in Object.entries(obj)){
//     count = count + 1;
//   }
//   return count;
// }