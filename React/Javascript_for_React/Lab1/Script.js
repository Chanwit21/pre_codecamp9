console.log("ให้เขียน Destrcutring assignment ที่ให้")
console.log("property ที่ชื่อ name ไปอยู่ในตัวแปร name")
console.log("property ที่ชื่อ years ไปอยู่ในตัวแปร age")
console.log("property ที่ชื่อ isAdmin ไปอยู่ในตัวแปร isAdmin (ให้เป็น false ถ้าไม่มีค่าให้กำหนด)")
console.log("let user = {")
console.log("    name: \"John\",")
console.log("    years: 30")
console.log("};")
let user = {
    name: "John",
    years: 30
};

let {
    name,
    years:age
} = user;
console.log(name);
console.log(age);