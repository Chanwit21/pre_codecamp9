function draw(n){
    let star = "";
    for (let colum = 0; colum<n;colum++){
        star += "*";
    }
    for (let row = 0; row<n;row++){
        console.log(star);
    }
}