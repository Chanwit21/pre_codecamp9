console.log("Exercise Object")
console.log("1.ให้ทำตามคำสั่งต่อไปนี้")
console.log("- สร้าง Object เปล่าขึ้นมา")
console.log("- เพิ่ม properties name เข้าไปและให้ value เป็น “Sonter”")
console.log("- เพิ่ม properties surname เข้าไปและให้ value เป็น “Pakorn”")
console.log("- เปลี่ยน properties name เป็น “Boy”")
console.log("- ลบ properties name ออกจาก Object")
let obj1 = {};
obj1["name"] = "Sonter";
obj1["surname"] = "Pakorn";
obj1["name"] = "Boy";
delete obj1["name"]

console.log("2.ให้เขียนฟังก์ชันชื่อ isEmpty(obj) โดยจะมี parameters เป็น obj และ ฟังก์ชันนี้จะเช็คว่า obj นี้มี properties ไหม ")
console.log("ถ้ามีให้คืนค่า false ถ้าไม่มีให้คืนค่า true")
function isEmpty(obj) {
    for (keys in obj){
      return false;
    }
    return true;
}

console.log("3.การเขียนข้างล่างต่อไปนี้ Error ไหม")
const user = {
  name: "John"
};

// does it work?
user.name = "Pete";


console.log("4.จงเขียนฟังก์ชัน sum(obj) ที่รับ obj ที่เก็บ properties โดยมี key เป็นชื่อพนักงานและมี value เป็นเงินเดือน")
console.log("ให้ฟังก์ชันคืนค่าเป็นผลรวมของเงินเดือนพนักงานทั้งหมด")
function sum(obj) {
  let sum = 0;
  for (keys in obj) {
    sum = sum + obj[keys];
  }
  return sum;
}

console.log("5.จงเขียนฟังก์ชัน multiplyNumeric(obj, times) โดยถ้า properties นั้นมี value เป็น number ")
console.log("ให้คูณ value นั้นด้วย times ถ้าข้อมูลเเป็นอย่างอื่นไม่ต้องทำอะไร")
function multiplyNumeric(obj, times) {
  for (keys in obj){
    if (typeof(obj[keys]) == "number" ) {
      obj[keys] = obj[keys]*times;
    }
  }
  return obj;
}