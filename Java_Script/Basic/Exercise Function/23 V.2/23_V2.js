function draw(n) {
    for (let row = 0; row < (2 * n - 1); row++) {
        let num = "";
        for (let colum = 0; colum < (2 * n - 1); colum++) {
            if (colum<(n-1) && row<(n-1) && (row+colum)<(n-1)) {
                num += `-`
            }
            else if (colum<(n-1) && row>(n-1) && (row+n-colum-1)>(2*n-2)) {
                num += `-`
            }
            else if (colum>(n-1) && row<(n-1) && (colum+n-row-1)>(2*n-2)) {
                num += `-`
            }
            else if (colum>(n-1) && row>(n-1) && (row+colum)>(3*n-3)) {
                num += `-`
            }
            else {
                num += `*`
            }
        }
        console.log(num);
        document.querySelector("#p1").innerHTML += `${num}<br>`

    }
}

let a = +prompt("Input Your Number in range 1-73 :");
draw(a);
