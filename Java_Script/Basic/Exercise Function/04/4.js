function draw(n){
    for (let row = 0; row<n;row++){
        let num = "";
        for (let colum = 0; colum<n;colum++){
            num += `${row+1}`;
        }
        console.log(num);
    }
}