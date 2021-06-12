console.log("Exercise Methods ของ Array ");
console.log("1.ให้สร้าง array2 จาก array1 ตามที่โจทย์กำหนด โดยใช้ฟังก์ชัน Array.map()");

// console.log("1.1   array1 = [1, 2, 30, 400]")
// console.log("      array2 [2, 4, 60, 800]")
// console.log("")
// const array1 = [1, 2, 30, 400];
// let array2 = array1.map(x => x*2);
// console.log(array2)

// console.log("1.2   array1 = [1, 2, 3, 4]")
// console.log("      array2 [\"1\", \"2\", \"3\", \"4\"]")
// console.log("")
// const array1 = [1, 2, 3, 4];
// let array2 = array1.map(x => String(x));
// console.log(array2)

// console.log("1.3   array1 = [1, \"1\", 2, {}] ")
// console.log("      array2 [\"number\", \"string\", \"number\", \"object\"]")
// console.log("")
// const array1 = [1, "1", 2, {}];
// let array2 = array1.map(x => typeof(x));
// console.log(array2)

// console.log("1.4   array1 = [\"apple\", \"banana\", \"orange\"]")
// console.log("      array2 [\"APPLE\", \"BANANA\", \"ORANGE\"]")
// let array1 = ["apple", "banana", "orange"];
// let array2 = array1.map(x => x.toUpperCase());
// console.log(array2)

// console.log("1.5   array1 = [")
// console.log("        { name: \"apple\", age: 14 },")
// console.log("        { name: \"banana\", age: 18 },")
// console.log("        { name: \"watermelon\", age: 32 },")
// console.log("      ]")
// console.log("    array2 [\"apple\", \"banana\", \"watermelon\"]")
// const array1 = [
//        { name: "apple", age: 14 },
//        { name: "banana", age: 18 },
//        { name: "watermelon", age: 32 },
//      ];
// let array2 = array1.map(x => x.name);
// console.log(array2)

// console.log("1.6 array1 = [")
// console.log("        { name: \"apple\", age: 14 },")
// console.log("        { name: \"banana\", age: 18 },")
// console.log("        { name: \"watermelon\", age: 32 },")
// console.log("      ]")
// console.log("    array2 [14, 18, 32] ")
// const array1 = [
//     { name: "apple", age: 14 },
//     { name: "banana", age: 18 },
//     { name: "watermelon", age: 32 },
//   ];
// let array2 = array1.map(x => x.age);
// console.log(array2)

// console.log("1.7 array1 = [")
// console.log("        { name: \"apple\", surname: \"London\" },")
// console.log("        { name: \"banana\", surname: \"Bangkok\" },")
// console.log("        { name: \"watermelon\", surname: \"Singapore\" },")
// console.log("      ]")
// console.log("    array2 [\"apple London\", \"banana Bangkok\", \"watermelon Singapore\"]")
// const array1 = [
//     { name: "apple", surname: "London" },
//     { name: "banana", surname: "Bangkok" },
//     { name: "watermelon", surname: "Singapore" },
//   ]
// let array2 = array1.map(x => `${x.name} ${x.surname}`);
// console.log(array2)

// console.log("1.8 array1 = [1,3,4,5,6,7,8]")
// console.log("    array2 [\"odd\", \"odd\", \"even\", \"odd\", \"even\", \"odd\", \"even\"]")
// const array1 = [1,3,4,5,6,7,8];
// let array2 = array1.map(function(x) {
//     return (x%2 == 0)? "even" : "odd";
// })
// console.log(array2)

// console.log("1.9 array1 = [1, -3, 2, 8, -4, 5]")
// console.log("    array2 [1, 3, 2, 8, 4, 5]")
// const array1 = [1, -3, 2, 8, -4, 5];
// let array2 = array1.map(function(x) {
//     return Math.abs(x);
// })
// console.log(array2)

// console.log("1.10 array1 = [100, 200.25, 300.84, 400.3]")
// console.log("     array2 [\"100.00\", \"200.25\", \"300.84\", \"400.30\"]")
// const array1 = [100, 200.25, 300.84, 400.3];
// let array2 = array1.map(function(x) {
//     return String(x.toFixed(2));
// })
// console.log(array2)

console.log("1.11 array1 = [")
console.log("       { name: \"apple\", birth: \"2000-01-01\" },")
console.log("       { name: \"banana\", birth: \"1990-10-01\" },")
console.log("       { name: \"watermelon\", birth: \"1985-12-01\" },")
console.log("     ]")
console.log("     array2 [")
console.log("       { name: \"apple\", birth: \"2000-01-01\", age: 19 },")
console.log("       { name: \"banana\", birth: \"1990-10-01\", age: 29 },")
console.log("       { name: \"watermelon\", birth: \"1985-12-01\", age: 33 },")
console.log("     ]")
const array1 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-01" },
  { name: "watermelon", birth: "1985-12-01" },
];
let array2 = array1.map( x => Object.assign({},x)) //Copy Object ใน Array 1 มาไว้ที่ Array2 โดยที่แก้ไข Array2 Array1 จะไม่เปลี่ยน
let array3 = array2.map(function(x) {
    return x.age = 2021 - x.birth.split("-",1)[0];
})
console.log(array1)
console.log(array2)

// console.log("1.12 array1 = [")
// console.log("       { name: \"apple\", birth: \"2000-01-01\" },")
// console.log("       { name: \"banana\", birth: \"1990-10-10\" },")
// console.log("       { name: \"watermelon\", birth: \"1985-12-30\" },")
// console.log("     ]")
// console.log("     array2 [")
// console.log("         \"<tr>")
// console.log("           <td>apple</td> ")
// console.log("           <td>01 jan 2000</td>")
// console.log("          </tr>\",")
// console.log("         \"<tr> <td>banana</td> <td>10 oct 1990</td> </tr>\",")
// console.log("         \"<tr> <td>watermelon</td> <td>30 dec 1985</td> </tr>\",")
// console.log("     ] ")
// const array1 = [
//   { name: "apple", birth: "2000-01-01" },
//   { name: "banana", birth: "1990-10-10" },
//   { name: "watermelon", birth: "1985-12-30" },
// ];
// let array2 = array1.map(function (x) {
//   let month = null;
//   switch (Number(x.birth.split("-", 3)[1])) {
//     case 01:
//       month = "jan";
//       break;
//     case 02:
//       month = "feb";
//       break;
//     case 03:
//       month = "mar";
//       break;
//     case 04:
//       month = "apr";
//       break;
//     case 05:
//       month = "may";
//       break;
//     case 06:
//       month = "jun";
//       break;
//     case 07:
//       month = "jul";
//       break;
//     case 08:
//       month = "aug";
//       break;
//     case 09:
//       month = "sep";
//       break;
//     case 10:
//       month = "oct";
//       break;
//     case 11:
//       month = "nov";
//       break;
//     case 12:
//       month = "dec";
//       break;
//   }
//   return `<tr> <td>${x.name}</td> <td>${x.birth.split("-", 3)[2]} ${month} ${x.birth.split("-", 3)[0]}</td> </tr>`;
// });
// console.log(array2);

// console.log("2.ให้สร้าง array2 จาก array1 ตามที่โจทย์กำหนด โดยใช้ฟังก์ชัน Array.filter() ");

// console.log("2.1  array1 = [1, 2, 30, 400]")
// console.log("     array2 [30, 400] // filter เลขที่มากกว่า 10")
// console.log("")
// const array1 = [1, 2, 30, 400];
// let array2 = array1.filter(function(x) {
//     return x>=30;
// })
// console.log(array2)

// console.log("2.2  array1 = [1, 2, 3, 4]")
// console.log("     array2 [1, 3] // filter เลขคี่")
// console.log("")
// const array1 = [1, 2, 3, 4];
// let array2 = array1.filter( x => x>2);
// console.log(array2);

// console.log("2.3  array1 = [1, \"1\", 2, {}] ")
// console.log("     array2 [1, 2] // filter Number")
// console.log("")
// const array1 = [1, "1", 2, {}];
// let array2 = array1.filter( x => typeof(x) == "number")
// console.log(array2);

// console.log("2.4  array1 = [\"apple\", \"banana\", \"orange\", \"pineapple\", \"watermeon\"]")
// console.log("     array2 [\"pineapple\", \"watermeon\"] // filter ตัวอักษร > 6")
// console.log("")
// const array1 = ["apple", "banana", "orange", "pineapple", "watermeon"];
// let array2 = array1.filter( x => x.length > 6)
// console.log(array2)

// console.log("2.5 array1 = [")
// console.log("   { name: \"apple\", age: 14 },")
// console.log("   { name: \"banana\", age: 18 },")
// console.log("   { name: \"watermelon\", age: 32 },")
// console.log("   { name: \"pineapple\", age: 16 },")
// console.log("   { name: \"peach\", age: 24 },")
// console.log(" ]")
// console.log(" array2 [")
// console.log("   { name: \"apple\", age: 14 },")
// console.log("   { name: \"pineapple\", age: 16 },")
// console.log(" ] // filter age < 18")
// console.log("")
// const array1 = [
//   { name: "apple", age: 14 },
//   { name: "banana", age: 18 },
//   { name: "watermelon", age: 32 },
//   { name: "pineapple", age: 16 },
//   { name: "peach", age: 24 },
// ];
// let array2 = array1.filter(function(x) {
//     return x.age < 18 ;
// })
// console.log(array2)

// console.log("2.6 array1 = [")
// console.log("   { name: \"apple\", age: 14 },")
// console.log("   { name: \"banana\", age: 18 },")
// console.log("   { name: \"watermelon\", age: 32 },")
// console.log("   { name: \"pineapple\", age: 16 },")
// console.log("   { name: \"peach\", age: 24 },")
// console.log(" ]")
// console.log(" array2 [")
// console.log("   { name: \"apple\", age: 14 },")
// console.log("   { name: \"banana\", age: 18 },")
// console.log("   { name: \"pineapple\", age: 16 },")
// console.log("   { name: \"peach\", age: 24 },")
// console.log(" ] // filter ไม่เอาคนที่อายุ 32")
// console.log("")
// const array1 = [
//     { name: "apple", age: 14 },
//     { name: "banana", age: 18 },
//     { name: "watermelon", age: 32 },
//     { name: "pineapple", age: 16 },
//     { name: "peach", age: 24 },
//   ]
// let array2 = array1.filter(function(x) {
//     return x.age != 32 ;
// })
// console.log(array2);

// console.log("2.7  array1 = [1, -3, 2, 8, -4, 5]")
// console.log(" array2 [1, 2, 8, 5] // filter เลขบวก")
// console.log("")
// const array1 =  [1, -3, 2, 8, -4, 5];
// let array2 = array1.filter( x => x>0);
// console.log(array2);

// console.log("2.8  array1 = [1,3,4,5,6,7,8]")
// console.log(" array2 [3, 6] // filter เลขหาร 3 ลงตัว")
// console.log("")
// const array1 = [1,3,4,5,6,7,8];
// let array2 = array1.filter(function(x) {
//     return x%3 == 0 ;
// })
// console.log(array2)

// console.log("2.9  array1 = [\"peach\", 1, -3, \"2\", {}, []]")
// console.log(" array2 [\"peach\", \"2\"] // filter string")
// console.log("")
// const array1 = ["peach", 1, -3, "2", {}, []];
// let array2 = array1.filter( x => typeof(x) == "string");
// console.log(array2)

// console.log("2.10 array1 = [\"APPLE\", \"appLE\", \"PEACH\", \"PEach\"]")
// console.log(" array2 = [\"APPLE\", \"PEACH\"] // filter คำที่เป็นอักษรใหญ่ทุกตัว")
// console.log("")
// const array1 = ["APPLE", "appLE", "PEACH", "PEach"];
// let array2 = array1.filter(function(x) {
//     let count = 0;
//     let y = x.split('')
//     for (let i = 0 ; i < y.length ; i++ ) {
//         if( y[i].codePointAt(0) > 90 ){
//             count = count + 1;
//         }
//     }
//     return count == 0;
// })
// console.log(array2)

// console.log("2.11 array1 = [")
// console.log("   { name: \"apple\", birth: \"2001-01-01\" },")
// console.log("   { name: \"banana\", birth: \"1990-10-10\" },")
// console.log("   { name: \"watermelon\", birth: \"1985-12-30\" },")
// console.log("   { name: \"peach\", birth: \"2002-10-13\" },")
// console.log(" ]")
// console.log(" array2 [")
// console.log("   { name: \"banana\", birth: \"1990-10-10\" },")
// console.log("     { name: \"peach\", birth: \"2002-10-13\" },")
// console.log(" ] // filter คนเกิดเดือน 10")
// console.log("")
// const array1 = [
//   { name: "apple", birth: "2001-01-01" },
//   { name: "banana", birth: "1990-10-10" },
//   { name: "watermelon", birth: "1985-12-30" },
//   { name: "peach", birth: "2002-10-13" },
// ];
// let array2 = array1.filter(function(x) {
//     return x.birth.split('-')[1] == "10";
// })
// console.log(array2);

// console.log("2.12 array1 = [");
// console.log('   { name: "apple", birth: "2001-01-01" },');
// console.log('   { name: "banana", birth: "1990-10-10" },');
// console.log('   { name: "watermelon", birth: "1985-12-30" },');
// console.log('   { name: "peach", birth: "2002-10-13" },');
// console.log(" ]");
// console.log(" array2 [");
// console.log('   { name: "banana", birth: "1990-10-10" },');
// console.log('   { name: "watermelon", birth: "1985-12-30" },');
// console.log(" ] // filter คนเกิดก่อนปี 2000");
// const array1 = [
//   { name: "apple", birth: "2001-01-01" },
//   { name: "banana", birth: "1990-10-10" },
//   { name: "watermelon", birth: "1985-12-30" },
//   { name: "peach", birth: "2002-10-13" },
// ];
// let array2 = array1.filter( x => x.birth.split('-')[0] <= 2000)
// console.log(array2);
