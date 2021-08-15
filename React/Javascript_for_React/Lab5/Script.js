console.log("การเขียนโค๊ดแบบนี้ object ไหนจะเป็นคนได้ property full ไป ");
console.log("let animal = {");
console.log("    eat() {");
console.log("      this.full = true;");
console.log("    }");
console.log("  };");
console.log("  ");
console.log("  let rabbit = {");
console.log("    __proto__: animal");
console.log("  };");
console.log("  ");
console.log("  rabbit.eat();");

let animal = {
  eat() {
    this.full = true;
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.eat(); //rabbit
console.log(rabbit)