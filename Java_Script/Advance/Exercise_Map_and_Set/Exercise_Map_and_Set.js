console.log("Exercise Map และ Set ")

// console.log("1.ให้ arr เป็น Array สร้าง function ชื่อ unique(arr) ให้คืนค่าเป็น unique items ของ arr")
// console.log("function unique(arr) {")
// console.log("  /* your code */")
// console.log("}")
// console.log("let values = [\"Hare\", \"Krishna\", \"Hare\", \"Krishna\", \"Krishna\", \"Krishna\", \"Hare\", \"Hare\", \":-O\" ];")
// console.log("alert( unique(values) ); // Hare, Krishna, :-O")
// let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O" ];
// function unique(arr) {
//   let set = new Set(arr);
//   return Array.from(set);
// }
// alert( unique(values) );

// console.log("2.Anagram เป็นตัวอักษรที่มีจำนวนตัวอักษรแต่ละตัวที่เท่ากัน แต่เรียงไม่เหมือนกัน ( Optional )")
// console.log("let arr = [\"nap\", \"teachers\", \"cheaters\", \"PAN\", \"ear\", \"era\", \"hectares\"];")
// console.log("alert( aclean(arr) ); // \"nap,teachers,ear\" or \"PAN,cheaters,era\"")
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// function aclean(arr) {

// }

console.log("3.เราได้ array จาก map.keys() แต่ไม่สามารถใช้ push ได้เราจะทำยังไงให้ keys.push สามารถทำงานได")
console.log("let map = new Map();")
console.log("map.set(\"name\", \"John\");")
console.log("let keys = map.keys();")
console.log("// Error: keys.push is not a function")
console.log("keys.push(\"more\");")
let map = new Map();

map.set("name", "John");

// let keys = map.keys();
let keyMap = new Map()

Array.from(map.keys()).forEach(function (element,index){
  // console.log(`${index}:${element}`)
  return obj.set(index,element)
})

let keys = {
  length:1,
  push: function push(str) {
    let arr = new Array()
    map.set(str);
    // arr.push(str)
    // for (let key1 of arr){
    //   map.set(key1);
    // }
    obj.set(this.length,str);
    [].push.call(this, str)
    return map;
  }
}
