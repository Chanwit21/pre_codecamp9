function draw(n){
    let count = 0;
    for (let row = 0; row<n;row++){
        let num = "";
        for (let colum = 0; colum<n;colum++){
            num += `${n**2-(row+colum+count)}`;
        }
        console.log(num);
        count = count+(n-1) ;
    }
}