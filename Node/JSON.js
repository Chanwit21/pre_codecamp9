// var myJSON = '{"name": "Kate", "pet": {"dog": "Corgi", "cat": "Persian"}}';

// var myObj = JSON.parse(myJSON);

// console.log(myObj)
// // Modify myObj...

// JSON.stringify(myObj);

// Read FIle
// const fs = require('fs')
// let d
// let jsonObj
// let users
// let newData;
// d = fs.readFileSync('./sample.json','utf-8')
// console.log(d)
// jsonObj = JSON.parse(d);
// users = jsonObj.users;      // Copy by refference ดังนั้นเวลาเปลี่ยน users jsonObj จะเปลี่ยนแปลงค่าด้วย

// users.map(item => {                     // ไม่ได้ ถูก Mutate เพราะ map แต่ Mutate เพราะการกระทำภายใน {} Map
//     item.phoneNumber = item.userId.toString().repeat(7)
//     console.log(`${item.firstName} : ${item.phoneNumber}`)
// })
// // console.log(users)
// console.log(jsonObj)

// newData = JSON.stringify(jsonObj)
// fs.writeFileSync('./output.json',newData,err => {
//     if(err) throw err;
// })
// // console.log(newData)

// Lab แปลงคนที่มีนามสกุลจาก Mac เป็น Apple
const fs = require('fs')
let data = fs.readFileSync('./sample.json','utf8')
let dataObj = JSON.parse(data)
// console.log(dataObj)
let users = dataObj.users

let result = users.map(item=>{
    if(item.lastName === 'mac'){
        return {...item,"lastName":"Apple"}
    } else {
        return item;
    }
})

// console.log(result)
let newResultObj = {}
newResultObj.users = result
// console.log(newResultObj)
let newOutputJson = JSON.stringify(newResultObj)

fs.writeFileSync('./outputLab.json',newOutputJson, err => {
    if(err) throw err
})
