console.log("ให้เพิ่ม Method defer เข้าไปใน prototypes ของทุกฟังก์ชัน โดย Method นี้จะทำหน้าที่ return Function ให้ alert(a+b) เมื่อผ่านไป ms")
Function.prototype.defer = function (ms){
  let f = this;

  return function(a,b) {
    setTimeout(()=>f(a,b),ms);
  }
}

function f(a, b) {
  alert( a + b );
}

console.log(f.defer(1000)(1, 2)); // แสดง 3 หลังจากผ่านไป 1 วินาที
