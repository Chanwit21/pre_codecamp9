console.log("ให้สร้าง function topSalary(salaries) ที่คืนค่าชื่อคนที่มีเงินเดือนสูงสุด")
console.log("ถ้า salaries ไม่มีข้อมูลให้คืนค่าเป็น null")
console.log("ถ้าสูงสุดมีหลายคน ก็ให้คืนใครก็ได้สักคน")
console.log("let salaries = {")
console.log("    \"John\": 100,")
console.log("    \"Pete\": 300,")
console.log("    \"Mary\": 250")
console.log("};")
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let Mostmoney = 0;
    let Mostsalariesname = null;
    for (let name in salaries) {
        if (salaries[name] > Mostmoney) {
            Mostsalariesname = name;
            Mostmoney = salaries[name];
        }
    }
    return `${Mostsalariesname} have a most salaries at ${Mostmoney}`;
}

console.log(topSalary(salaries));