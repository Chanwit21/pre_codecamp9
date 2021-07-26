const fetch = require('node-fetch');

async function getUser() {
  try {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    console.log(response.status);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
// getUser()

async function getText() {
    try{

        const response = await fetch("https://mdn.github.io/fetch-examples/fetch-text/");
        const data = await response.text();
        console.log(response.status)
        console.log(data)
    } catch(err) {
        console.log(err)
    }
}
// getText()

async function getImg() {
    try{

        const response = await fetch("https://mdn.github.io/fetch-examples/basic-fetch/");
        const data = await response.text();
        console.log(response.status)
        console.log(response)
        console.log(data)
    } catch(err) {
        console.log(err)
    }
}
getImg()