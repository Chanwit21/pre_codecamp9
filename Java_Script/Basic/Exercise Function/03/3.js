function draw(n){
    let num = "";
    for (let colum = 0; colum<n;colum++){
        num += `${colum+1}`;
    }
    for (let row = 0; row<n;row++){
        console.log(num);
    }
}