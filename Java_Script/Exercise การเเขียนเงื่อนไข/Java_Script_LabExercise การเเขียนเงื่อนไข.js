console.log("1. Browser จะโชว์ข้อความ “Hello Codecamp #5” ไหม") //Show
if ("0") {
    alert("Hello Codecamp #5")
}
console.log("2. ใช้ if else ในการเขียนถามชื่อของคุณ ")
console.log("- ถ้าตอบถูกให้แสดงคำว่า “เก่งมาก” ")
console.log("- ถ้าตอบผิดให้แสดงคำว่า “คุณไม่รู้จักชื่อฉัน” ")
let Nickname = prompt("What is Nickname of Chanwit ", "Nickname")
let nickname = Nickname.toLowerCase()
if (nickname === "bomb") {
    alert("เก่งมาก")
}
else {
    alert("คุณไม่รู้จักชื่อฉัน")
}
console.log("3.	ใช้ prompt ในการรับคะแนนมาคำนวณเกรด")
console.log("ถ้าคะแนน มากกว่าเท่ากับ 80	ได้ A")
console.log("ถ้าคะแนน อยู่ระหว่าง 70 - 79 	ได้ B")
console.log("ถ้าคะแนน อยู่ระหว่าง 60 - 69 	ได้ C")
console.log("ถ้าคะแนน อยู่ระหว่าง 50 - 59 	ได้ D")
console.log("ถ้าคะแนน น้อยกว่า 50		   ได้ F")
let score = prompt("คะแนนที่ได้");
let Grade;
score = Number(score)
if (score > 79) { 
    Grade = "A"
}
else if (score > 69) { 
    Grade = "B" 
}
else if (score > 59) { 
    Grade = "C" 
}
else if (score > 49) { 
    Grade = "D" 
}
else { 
    Grade = "F" 
}
alert("Your Grade is " + Grade)
console.log("4.	เปลี่ยน if-else ข้างล่างในอยู่ในรูปของ Ternary Operators")
console.log("let age = prompt(\"How old are you:\")")
console.log("let price;")
console.log("if (age < 18) { ")
console.log("    price = 2000")
console.log("}")
console.log("else { ")
console.log("    price = 3000 ")
console.log("}")
let age = prompt("How old are you:");
let price;
age = Number(age)
price = (age<18)?2000:3000;
alert("Your Price is " + price)