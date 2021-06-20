console.log("มี Object Dictionary ที่สร้างจาก Object.create(null) เพื่อเก็บ key/value pairs");
console.log("ให้เพิ่ม Method dictionary.toString() และคืนค่าเป็น key ทั้งหมดออกมาที่คั้นด้วย comma");
console.log("let dictionary = Object.create(null);");
console.log("");
console.log("// your code to add dictionary.toString method");
console.log("");
console.log("// add some data");
console.log('dictionary.apple = "Apple";');
console.log('dictionary.__proto__ = "test"; // __proto__ is a regular property key here');
console.log("");
console.log("// only apple and __proto__ are in the loop");
console.log("for(let key in dictionary) {");
console.log('  alert(key); // "apple", then "__proto__"');
console.log("}");
console.log("");
console.log("// your toString in action");
console.log('alert(dictionary); // "apple,__proto__"');

let dictionary = Object.create(null, {
  toString: {
    value: function() {
      return Object.keys(this).join();
    }
  }
});

// your code to add dictionary.toString method

// add some data
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// only apple and __proto__ are in the loop
for (let key in dictionary) {
  alert(key); // "apple", then "__proto__"
}

// your toString in action
alert(dictionary); // "apple,__proto__"
