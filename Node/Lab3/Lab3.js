
function setTimeoutAndLog(input) {
    return new Promise( (reslove,reject)=>{
        setTimeout(()=>{
            console.log(input)
            reslove()
        },1000)
    })
}

async function runText() {
    try {
        await setTimeoutAndLog('a');
        await setTimeoutAndLog('b');
        await setTimeoutAndLog('c');
        await setTimeoutAndLog('d');
    } catch(err) {
        console.log(err)
    }
}

runText()