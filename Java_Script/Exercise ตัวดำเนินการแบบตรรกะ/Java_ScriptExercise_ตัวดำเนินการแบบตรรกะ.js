console.log("Exercise ตัวดำเนินการแบบตรรกะ")

console.log("1. คำสั่งต่อไปนี้จะแสดงค่าเป็นอะไร")
console.log("alert( null || 2 || undefined );")
console.log("alert( alert(1) || 2 || alert(3) );")
console.log("alert( 1 && null && 2 );")
console.log("alert( alert(1) && alert(2) );")
console.log("alert( null || 2 && 3 || 4 );")
alert( null || 2 || undefined );        //2         //2
alert( alert(1) || 2 || alert(3) );     //alert(1)  //alert(1),2
alert( 1 && null && 2 );                //null      //null15ndefined
alert( null || 2 && 3 || 4 );           //3     //3

console.log("2. เขียนคำสั่ง if ที่เช็คอายุว่าอยู่ระหว่าง 18 - 60")
console.log("3. เขียนคำสั่ง if ที่เช็คอายุว่าไม่อยู่ระหว่าง 18 - 60")
let age = prompt("Input your age")
let condition1 = age >= 18;
let condition2 = age <= 60;
if ( condition1 && condition2 ) {
    alert("Your age in range 18-60 years old.");
}
else if (age == " " || age == null || age == "" ){
    alert("Thank you.")
}
else {
    alert("Your age not in range 18-60 years old.");
}
console.log("4. คำสั่ง alert ไหนที่จะถูกรันบ้าง")             
console.log("if (-1 || 0) alert( 'first' );")          //alert    
console.log("if (-1 && 0) alert( 'second' );")         //not alert
console.log("if (null || -1 && 0) alert( 'third' );")  //alert        

console.log("5. ให้เขียนระบบ login")
console.log("- ให้ใช้ prompt ในการถามใครเป็นคน login")
console.log("- ถ้าผู้ใช้กรอกว่า “Admin” ให้ใช้ prompt ถาม password")
console.log("- วิธีเช็ค Password")
console.log("- ถ้า string นั้นเป็น “codecamp#5” ให้ alert “ยินดีต้อนรับ”")
console.log("- ถ้า string เป็นอย่างอื่นให้ alert เป็น “Wrong password”")
console.log("- ถ้าเป็น string ว่าง หรือ กด cancel ให้ alert ว่า “ยกเลิก”")
console.log("- ถ้าผู้ใช้กรอกอย่างอื่นที่ไม่ใช่ “Admin” ให้ alert ว่า “ผมไม่รู้จักคุณ”")
console.log("- ถ้าผู้ใช้กรอก input เป็น string ว่าง หรือกด Esc ให้ alert ว่า “ยกเลิก”")
let userName = prompt("Username:").toLowerCase() ;
if (userName == "admin") {
    let passWord = prompt("Pasword:")
    if (passWord == "codecamp#9"){
        alert("ยินดีต้อนรับ");
    }
    else if (passWord == " " || passWord == null || passWord == "" ) {
        alert("ยกเลิก");
    }
    else {
        alert("Wrong password");
    }
}
else if (userName == " " || userName == null || userName == "" ) {
    alert("ยกเลิก");
}
else {
    alert("ผมไม่รู้จักคุณ");
}