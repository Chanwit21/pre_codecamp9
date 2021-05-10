function draw(n){
    for (let row = 0; row<n;row++){
        let num = "";
        for (let colum = 0; colum<n;colum++){
            num += `${n-row}`;
        }
        console.log(num);
    }
}