console.log("การเขียนโค๊ดแบบนี้ กระเพราะจะถูกแชร์กันจะแก้ไขยังไงดี ")
console.log("let hamster = {")
console.log("  stomach: [],")
console.log("")
console.log("  eat(food) {")
console.log("    this.stomach.push(food);")
console.log("  }")
console.log("};")
console.log("")
console.log("let speedy = {")
console.log("  __proto__: hamster")
console.log("};")
console.log("")
console.log("let lazy = {")
console.log("  __proto__: hamster")
console.log("};")
console.log("// This one found the food")
console.log("speedy.eat(\"apple\");")
console.log("alert( speedy.stomach ); // apple")
console.log("")
console.log("// This one also has it, why? fix please.")
console.log("alert( lazy.stomach ); // apple")

let hamster = {

  eat(food) {
    if (!this.stomach) this.stomach = [];
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};
// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

alert( lazy.stomach ); // แก้โดยกการใส่กระเพราะแยกให้แต่ละตัว