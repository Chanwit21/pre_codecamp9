console.log("ในบรรทัดที่มีเลข 1 2 และ 3 จะได้ค่าออกมาเป็นอะไร");
console.log("let animal = {");
console.log("    jumps: null");
console.log("  };");
console.log("  ");
console.log("  let rabbit = {");
console.log("    __proto__: animal,");
console.log("    jumps: true");
console.log("  };");
console.log("  alert( rabbit.jumps ); // ? (1)");
console.log("");
console.log("delete rabbit.jumps;");
console.log("");
console.log("alert( rabbit.jumps ); // ? (2)");
console.log("");
console.log("delete animal.jumps;");
console.log("");
console.log("alert( rabbit.jumps ); // ? (3)");
let animal = {
  jumps: null,
};

let rabbit = {
  __proto__: animal,
  jumps: true,
};

alert(rabbit.jumps); // true (1)

delete rabbit.jumps;

alert(rabbit.jumps); // null (2)

delete animal.jumps;

alert(rabbit.jumps); // undefined (3)
