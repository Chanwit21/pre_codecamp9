console.log("Exercise Methods ของ Object")
console.log("1.การทำงานของ code ดังกล่าวจะได้อะไรออกมา")
let user = {
  name: "John",
  go: function() { alert(this.name) }
}

(user.go)()
// Error เพราะไม่มี ; ถ้าใส่ ; จะได้ "John"

console.log("2.การทำงานของ code ดังกล่าวจะได้อะไรออกมา")
function makeUser() {
  return {
    name: "John",
    ref: this
  };s
};

let user = makeUser();

alert( user.ref.name ); // What's the result? undefined

console.log("3.สร้าง object calculator จาก 3 methods นี้:")
console.log("- read() ใช้ prompts สำหรับรับค่ามา 2 ค่าและเก็บเป็น object properties.")
console.log("- sum() คืนค่าผลบวกของ 2 ค่านั้น.")
console.log("- mul() คืนค่าผลคูณของ 2 ค่านั้น.")
let calculator = {
  read() {
    for (let i = 0; i < 2; i++) {
      this[`num${i+1}`] = +prompt( `Input Number${i+1}`)
    }
  },
  sum() {
    let sum =0 ;
    for (let i = 0; i < 2; i++) {
      sum = this[`num${i+1}`] + sum;
    }
    return sum;
  },
  mul() {
    let mul = 1 ;
    for (let i = 0; i < 2; i++) {
      mul = this[`num${i+1}`]*mul;
    }
    return mul;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


console.log("4.ให้ Object ชื่อ ladder มี method ขึ้น และ ลง")
console.log("- Object ชื่อ ladder สามารถเรียก function แบบนี้ได้")
console.log("- ดัดแปลง Object ชื่อ ladder สามารถเรียก function แบบนี้ได้")
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // shows the current step
    alert( this.step );
    return this;
  }
};

