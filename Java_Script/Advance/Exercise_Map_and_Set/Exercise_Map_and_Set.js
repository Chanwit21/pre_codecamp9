console.log("Exercise Map และ Set ");

// console.log("1.ให้ arr เป็น Array สร้าง function ชื่อ unique(arr) ให้คืนค่าเป็น unique items ของ arr")
// console.log("function unique(arr) {")
// console.log("  /* your code */")
// console.log("}")
// console.log("let values = [\"Hare\", \"Krishna\", \"Hare\", \"Krishna\", \"Krishna\", \"Krishna\", \"Hare\", \"Hare\", \":-O\" ];")
// console.log("alert( unique(values) ); // Hare, Krishna, :-O")
// let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O" ];
// function unique(arr) {
//   let set = new Set(arr); //แปลงเป็น set แล้วแปลงกลับ เป็น Array ตัวที่ซ้ำก็จะเป็นตัวเดียวใน Array
//   return Array.from(set);
// }
// alert( unique(values) );

// console.log("2.Anagram เป็นตัวอักษรที่มีจำนวนตัวอักษรแต่ละตัวที่เท่ากัน แต่เรียงไม่เหมือนกัน ( Optional )")
// console.log("let arr = [\"nap\", \"teachers\", \"cheaters\", \"PAN\", \"ear\", \"era\", \"hectares\"];")
// console.log("alert( aclean(arr) ); // \"nap,teachers,ear\" or \"PAN,cheaters,era\"")
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  // สร้าง map ไว้เพื่อสร้าง key ที่เป็นค่าของ Array ที่ใส่ใน input
  let map = new Map();
  // สร้าง array เพื่อ ทำ Output จาก Map ที่ Clean แล้ว
  let array = new Array();

  // ใส่ค่า  map โดย key คือ ค่าที่ใส่จาก array input และ Value คือ Array ที่ใส่ตัวอักษรที่ได้จาก input จัดเป็นตัวเล็กให้หมดแล้วเรียงด้วย sort
  for (let value of arr) {
    map.set(value, Array.from(new Set(value.toLowerCase())).sort()); //ต้องเป็น Array เพราะว่าต้อง .Sort
  }

  //  สร้างสมการเช็กว่าค่าใน array เหมือนกันไหม โดยเปรียบเทียบขนาดก่อน และเปรียบเทียบแต่ละตัวว่ามีอยู่ใน Set ที่แปลงจาก Array ไหม
  function eqSet(array1, array2) {
    let set1 = new Set(array1);
    let set2 = new Set(array2);
    if (set1.size !== set2.size) {
      return false;
    }
    for (var a of set1) {
      if (!set2.has(a)) {
        return false;
      }
    }
    return true;
  }

  // ใช้ forEach ซ้อนกันในการเปรียบเทียบค่า value ใน map แต่ละตัวว่า Anagram เหมือนกันไหมถ้าเหมือนกันให้ลบตัวถัดจากตัวที่เจอตัวแรกออก
  map.forEach(function (value, key) {
    let count = 0;
    map.forEach(function (value1, key1) {
      let bool = eqSet(value, value1);
      if (bool == true) {
        //ถ้าเจอตัวที่เหมือนกันให้นับเพิ่มว่าเจอแล้ว
        count = count + 1;
      }
      if (count > 1) {
        //ถ้าเจอตัวซ้ำค่า Count จะเท่ากับ 2 ให้ทำการลบออก
        console.log(`${key1} is Deleted.`);
        map.delete(key1);
        count = count - 1; //เมื่อลบออกแล้วต้องลบค่า Count ออกด้วยเพราะว่าได้ลบตัวที่เจอออกไปแล้ว
      }
      // console.log(`value = ${value}, value1 = ${value1},bool = ${bool},count = ${count}`);
      // console.log(`key = ${key}, key1 = ${key1},bool = ${bool},count = ${count}`);
      // console.log(map);
    });
  });

  // เราจะได้ map ใหม่ที่ Clean แล้วเหลือแค่ Anagram ที่เป็นตัวแรกที่เจอ แล้วหลังจากนั้นเราจะใช้ forEach ในการสร้าง Array ในการใส่ค่า anagram ที่เป็น Key ใน Map เข้าไป
  map.forEach(function (value, key) {
    array.push(key);
  });
  return array;
}

// console.log("3.เราได้ array จาก map.keys() แต่ไม่สามารถใช้ push ได้เราจะทำยังไงให้ keys.push สามารถทำงานได")
// console.log("let map = new Map();")
// console.log("map.set(\"name\", \"John\");")
// console.log("let keys = map.keys();")
// console.log("// Error: keys.push is not a function")
// console.log("keys.push(\"more\");")
// let map = new Map();

// map.set("name", "BOMB");
// map.set("age", 18);
// map.set("pet", "cat");

// // สร้าง Map ขึ้นมาเพื่อรองรับค่า key ที่ได้จาก map ตัวเก่า แลัรับค่า key ที่ได้จากการ Push เข้ามา
// let keyMap = new Map()

// //นำค่าที่ได้ จาก key.map ของตัวต้นทาง มาสร้างเป็น Array จากนั้นนำค่าที่ได้จาก ฤrray ไปใส่ใน Map ที่สร้างไว้โดยให้ค่า key คือ index และ value คือ element ใน array
// Array.from(map.keys()).forEach(function (element,index){
//   // console.log(`${index}:${element}`)
//   return keyMap.set(index,element)
// })

// //สร้าง Object ที่สามารถใช้ keys.push ได้แล้วนำค่าที่ Push มาใส่ใน keyMap ใส่ใน map ต้นทางและ ในตังของมันเองด้วย โดย return ค่า map ต้นทาง
// let keys = {
//   length:keyMap.size,
//   push: function push(str) {
//     map.set(str);
//     keyMap.set(this.length,str);
//     [].push.call(this, str)
//     return map;
//   }
// }
