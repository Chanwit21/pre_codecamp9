function draw(n){
    let parameter = 2;
    let diff = 1;
    for (let row = 0; row<n;row++){
        let num = "";
    let parameter = 2;
        num += `${(row+diff)*parameter}`;
        console.log(num);
    }
}