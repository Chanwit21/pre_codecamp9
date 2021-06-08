console.log("Exercise String")

console.log("1.เขียนฟังก์ชัน ucFirst(string) โดยทำคืนค่าเป็น string เดิม แต่ตัวแรกของ string กลายเป็นพิมพ์ใหญ่")
function ucFirst(string) {
  let lenght = string.lenght
  let First = string.slice(0,1).toUpperCase()
  let last = string.slice(1,lenght)
  return First+last
}

console.log("2.เขียนฟังก์ชันที่ checkSpam โดยถ้าข้อความดังกล่าวมีคำว่า “xxx” หรือ “viagra” ให้คืนค่าเป็น true ถ้าไม่มีให้คืนค่าเป็น false")
function checkSpam(string) {
  if (string.includes("xxx") || string.includes("viagra")) {
    return true;
  } else {
    return false;
  }
}

console.log("3.เขียนฟังก์ชันที่ truncate(str, maxlength) โดยฟังก์ชันดังกล่าวจะเช็คว่า string ")
console.log("ที่ถูกส่งเข้ามามีความยาวเกิน maxlength ไหม ถ้าเกินให้แทน ข้อความต่อจากนั้นด้วย “...”")
function truncate(str, maxlength) {
  let strShow = str.slice(0,maxlength)
  return strShow + "..."
}

console.log("4.เขียนฟังก์ชันที่ extractCurrencyValue(string, rate) โดยที่ฟังก์ชันดังกล่าวจะแปลง string ที่เป็นค่าเงิน dollar ")
console.log("ให้เป็น number ที่มีค่าเป็นเงินบาทไทย โดยอ้างอิง  rate จาก parameters ตัวที่สอง ที่ส่งมาให้")
console.log("หากต้องการเปิดการสนับสนุนโปรแกรมอ่านหน้าจอ ให้กด Ctrl+Alt+Z หากต้องการเรียนรู้เกี่ยวกับแป้นพิมพ์ลัด ให้กด Ctrl+เครื่องหมายทับ (/)")
function extractCurrencyValue(string, rate) {
  let length = string.length;
  if (isNaN(Number(string[0]))) {
    let NumSlice = string.slice(1,length)
    return +NumSlice*rate;
  }else if (isNaN(Number(string[string.length-1]))){
    let NumSlice = string.slice(0,(length-1));
    return +NumSlice*rate;
  } else {
    return +string*rate;
  }
}