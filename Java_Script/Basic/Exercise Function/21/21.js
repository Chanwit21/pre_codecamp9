function draw(n) {
    for (let row = 0; row < n; row++) {
        let num = "";
        if (row < n) {
            for (let colum = 0; colum < (2 * n - 1); colum++) {
                if (colum <= (n-1) && ((colum + row) < (n - 1))) {
                    num += `-`
                }
                else if((colum > (n-1))&& ((colum+n-row-1)>(2*n-2))){
                    num += `-`
                }
                else {
                    num += `*`
                }
            }
            console.log(num);
        }
    }
}