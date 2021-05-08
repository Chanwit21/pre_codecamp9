let passcode = "";
let i = 0;
while (passcode != "Codecamp"){
    passcode = prompt('Enter Passode');
    i++;
    console.log(`Number of tries = ${i}`);
}
document.querySelector('#p1').innerText = "OK, You can access out content"