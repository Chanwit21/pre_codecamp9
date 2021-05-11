console.log("Exercise การเขียน Code")
console.log("1.แก้ไขการเขียนโค้ดต่อไปนี้")
console.log("function pow(x,n)")
console.log("{")
console.log("  let result=1;")
console.log("  for(let i=0;i<n;i++) {result*=x;}")
console.log("  return result;")
console.log("}")
console.log("let x=prompt("x?",''), n=prompt("n?",'')")
console.log("if (n<=0)")
console.log("{")
console.log("  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);")
console.log("}")
console.log("else")
console.log("{")
console.log("  alert(pow(x,n))")
console.log("}")
function pow(x, n) {
  let result = 1;
  for (let i = 0 ; i < n ; i++) {
    result *= x;
  } 
  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n <= 0) {
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
} else {
  alert(pow(x,n));
}


