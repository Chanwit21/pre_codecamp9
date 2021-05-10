console.log("Exercise Switch Cases")

console.log("1.แปลง Code ดังกล่าวเป็น if-else statement")
console.log("switch(browser){")
console.log("    case 'Edge' :")
console.log("        alert(`You \'ve got the Edge!`);")
console.log("        break;")
console.log("    case 'Chrome':")
console.log("    case 'Firefox':")
console.log("    case 'Safari':")
console.log("    case 'Opera':")
console.log("        alert(\"Okey we support these browsers too\");")
console.log("        break;")
console.log("    default:")
console.log("        alert(\"We hope that this page looks ok!\");")
console.log("}")
let browser = prompt("What is your Browser?")
if (browser == "Edge" ){
    alert(`You \'ve got the Edge!`);
}
else if(browser == "Chrome" || browser == "Firefox" ||browser == "Safari" ||browser == "Opera" ){
    alert("Okey we support these browsers too");
}
else{
    alert("We hope that this page looks ok!");
}

console.log("2.แปลง Code ดังกล่าวเป็น Switch cases")
console.log("let a = +prompt('a?','');")
console.log("if (a == 0) {")
console.log("    alert( 0 );")
console.log("}")
console.log("if (a == 1) {")
console.log("    alert( 1 );")
console.log("}")
console.log("if (a == 2 || a == 3 ) {")
console.log("    alert( '2,3' );")
console.log("}")
let a = +prompt('a?','');
switch(a){
    case 0:
        alert( 0 );
        break;
    case 1:
        alert( 1 );
        break;
    case 2:
    case 3:
        alert( '2,3' );
        break;
}