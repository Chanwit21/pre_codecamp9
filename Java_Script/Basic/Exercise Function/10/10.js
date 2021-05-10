function draw(n){
    for (let row = 0; row<n;row++){
        let num = "";
        for(let colum = 0; colum<n;colum++){
            num += `${(colum+1)*(row+1)}`;
        }
        console.log(num);
    }
}