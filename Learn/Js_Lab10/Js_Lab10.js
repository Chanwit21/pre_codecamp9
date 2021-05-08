let x = prompt("อยากเห็นสูตรคูณแม่อะไร?:")
// for(let m =2;m<13;m++){
//     for (n=2;n<13;n++){
//         document.querySelector("#p1").innerHTML += `${m} x ${n} = ${m*n} <br>`
//     }
//     document.querySelector("#p1").innerHTML += `<hr>`
// }
for (n=2;n<13;n++){
    document.querySelector("#p1").innerHTML += `${x} x ${n} = ${x*n} <br>`
}