console.log("Exercise for และ while")

console.log("1.เลขที่ถูก alert เป็นลำดับสุดท้ายคือเลขอะไร") //1 //1
console.log("let i=3;")
console.log("while(i){")
console.log("    alert(i--);")
console.log("}")
let i=3;
while(i){
    alert(i--);
    document.querySelector("#p1").innerHTML += `${i--} <br>`
}

console.log("2.code ทั้งสองอันนี้จะแสดง alert ออกมาเหมือนกันทั้งหมดหรือไม่") //ไม่
console.log("let i = 0;")
console.log("while(i++ <5) {alert(i);}") // i = 1 หลังออกจากวงเล็บ While
console.log("let i = 0;")
console.log("while(++i <5) {alert(i);}") // i = 1 ตั้งแต่ในวงเล็บ While
let j = 0;
while(j++ <5) {alert(j);} 
let j = 0;
while(++j <5) {alert(j);}

console.log("3.code ทั้งสองอันนี้จะแสดง alert ออกมาเหมือนกันทั้งหมดหรือไม่") // เหมือน // เหมือน
for (let k=0;i<5;k++){alert(k);}
for (let k=0;i<5;k++){alert(k);}

console.log("4.ให้เขียน loop ทั้งแสดงเลข 2 ถึง 10 ออกมา")
for (let k=2;k<=10;k++){
    alert(k);
}
let k = 2;
while(true){
    alert(`number ${k}!`)
    if(k==10) break;
    k++;
}

console.log("5.เปลี่ยน code for loop ด้านล่างนี้ให้เป็น while loop โดยที่ผลลัพธ์ยังเหมือนเดิม")
for (let m =0;m<3;m++){
    alert(`number ${m}!`)
}
let m = 0;
while(true){
    alert(`number ${m}!`)
    if(m==2) break;
    m++;
}

console.log("6.ให้เขียนเกมส์ทายตัวเลขสำหรับเล่นสองคน โดย")
console.log("- ให้ผู้เล่นคนแรกพิมพ์เลขใส่ใน prompt ที่อยู่ระหว่าง 1 ถึง 100 โดยไม่ให้ผู้เล่นคนที่สองรู้ว่าตัวเลขเป็นอะไร")
console.log("- และให้ผู้เล่นคนที่สองทายเลขโดยการพิมพ์เลขใส่ใน prompt จนกว่าจะถูก ถ้าไม่ถูก จะต้องบอกด้วยว่าเลขที่ผู้เล่นคนที่สองพิมพ์เข้ามา มากกว่า หรือ น้อยกว่าคำตอบนั้น")
let z = prompt("เลืออกใส่เลขระหว่าง 1-100")
if (+z>=1 && +z<=100){
    let x=0;
    z = Number(z);
    while(z != x ){
        x = +prompt("ใส่เลขที่ต้องการทายมาเลย:")
        if (z == x){
            alert("ยินดีด้วยคุณทายถูกแล้ว");
        }
        else if ((x == null || x == "" || x ==" ")&& x != 0 ){
            alert ("ยกเลิก");
        }
        else if ( Math.abs(z-x) < 10 ){
            alert(`ตัวเลขที่ทายมีค่าน้อยกว่าหรือมากกว่าในช่วง 0-10 `);
        }
        else if ( z > x){
            alert(`ตัวเลขที่ทายมีค่าน้อยกว่าค่าที่ตั้งไว้ประมาณ ${~~((z-x)/10)*10}`);
        }
        else {
            alert(`ตัวเลขที่ทายมีค่ามากกว่าค่าที่ตั้งไว้ประมาณ ${~~((x-z)/10)*10}`);
        }
    }
}
else if ( z == null || z == "" || z ==" "){
    alert ("ยกเลิก")
}
else{
    alert("เลขของคุณไม่ได้อยู่ในช่วง 1-100")
}