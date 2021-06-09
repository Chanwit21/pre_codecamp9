console.log("Exercise Array")
console.log("1.ผลลัพธ์ของความยาว array คืออะไร")
console.log("let fruits = [\"Apples\", \"Pear\", \"Orange\"];")
console.log("")
console.log("let shoppingCart = fruits;")
console.log("shoppingCart.push(\"Banana\");")
console.log("")
console.log("alert( fruits.length ); // ?")
let fruits = ["Apples", "Pear", "Orange"];
let shoppingCart = fruits;
shoppingCart.push("Banana");
alert( fruits.length ); //4

console.log("2.ให้ทำตามขั้นตอนต่อไปนี้")
console.log("- สร้าง array ชื่อ styles ที่มี items ชื่อ “Jazz” และ “Blues”")
console.log("- เพิ่ม “Rock-n-Roll” ต่อท้าย")
console.log("- นำค่า Classics ไปทับค่าตรงกลางของ Array")
console.log("- นำ items ตัวแรกออกมาและลบ items ตัวนั้นออกจาก array")
console.log("- เพิ่ม “Rap” และ “Reggae” ไปข้างหน้าของ Array")
let styles = ["Jazz","Blues"];
styles.push("Rock-n-Roll");
let length = styles.length;
styles[(length-1)/2] = "Classics";
styles.unshift("Rap","Reggae");

console.log("3.เขียนฟังก์ชัน sumInput() ที่")
console.log("- ใช้ propmt รับ value มาเก็บใน array")
console.log("- หยุดถามเมื่อเจอค่าที่ไม่ใช่ ตัวเลข")
console.log("- คำนวณผลรวมของตัวเลขทั้งหมดใน Array")
let MathArray = [];
let num = +prompt("Input Number :");
while(!isNaN(num)) {
  MathArray.push(num);
  num = +prompt("Input Number :");
}

console.log("4.Maximal contiguous subarray (**Optional**)")
console.log("- ให้เขียนฟังก์ชัน getMaxSubSum(arr) ที่ return ผลรวมของ subarray ที่มากที่สุดที่ติดกัน")
function sum(arr) {
  let sum = 0;
  for (let result of arr) {
    sum = result + sum;
  }
  return sum;
}
function getMaxSubSum(arr) {
  let pop = 0;
  let shift = 0;
  let Arraypop = [];
  let Arrayshift = [];
  let sumArrayshift = 0;
  let sumArraypop = 0;
  let result1 = 0;
  let result2 = 0;
  let result3 = 0;
  let result4 = 0;
  let result = 0;
  while (result2 >= result1) {
    result1 = sum(arr);
    pop = arr.pop();
    result2 = sum(arr);
    Arraypop.unshift(pop);
    sumArraypop = sumArraypop + pop;
    if (result2 < result1) {
      arr.push(pop);
      Arraypop.shift();
      sumArraypop = sumArraypop - pop;
    }
  }
  result = result1;
  while (result4 >= result3) {
    result3 = sum(arr);
    shift = arr.shift();
    result4 = sum(arr);
    Arrayshift.push(shift);
    sumArrayshift = sumArrayshift + shift;
    if (result4 < result3) {
      arr.unshift(shift);
      Arrayshift.pop();
      sumArrayshift = sumArrayshift - shift;
    }
  }
  if (result3 > result) {
    result = result3;
  }
  for (let i = 0; i < arr.length; i++) {
    if (result < arr[i]) {
      result = arr[i];
    }
  }
  return result;
}