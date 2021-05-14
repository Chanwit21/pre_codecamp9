console.log("Exercise Computed Properties")
// console.log("1.ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop ")
// console.log("และนำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น console.log() object นั้นออกมา")
// let key = "";
// let value = "";
// let user = {};
// let keylow = "";
// let valuelow = "";
// while (true) {
//   key = prompt("Your Key :");
//   keylow = key.toLowerCase();
//   if (keylow == "stop") break;
//   let checktype = confirm("Your type of Value is Number");
//   if (checktype == true){
//     value = +prompt ("Your Value :");
//   } else{
//     value = prompt ("Your Value :");
//     valuelow = value.toLowerCase();
//   }
//   if (valuelow == "stop") break;
//   user[key] = value
// }
// console.log(user);

console.log("2.ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง โดยให้ key เป็นชื่อของผลไม้") 
console.log("และ value เป็นจำนวนของผลไม้ (number) โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย")
let key = "";
let value = "";
let fruit = {};
let keylow = "";
let valuelow = "";
while (true) {
  key = prompt("Enter Fruit's name :");
  keylow = key.toLowerCase();
  if (keylow == "stop") break;
  value = +prompt ( `Enter the Value of ${key}`);
  if (value>1) key = `${key}s`
  fruit[key] = value
}
console.log(fruit);