console.log("ให้เพิ่ม Method defer เข้าไปใน prototypes ของทุกฟังก์ชัน โดย Method นี้จะทำหน้าที่ alert ข้อความออกมาหลังจากผ่านไป ms")
console.log("function f() {")
console.log("  alert(\"Hello!\");")
console.log("}")
console.log("")
console.log("f.defer(1000); // แสดง \"Hello!\" หลังจากผ่านไป 1 วินาที")

function f() {
    alert("Hello!");
}

Function.prototype.defer = function (ms) {
    setTimeout(this,ms);
}
f.defer(1000); // แสดง "Hello!" หลังจากผ่านไป 1 วินาที
