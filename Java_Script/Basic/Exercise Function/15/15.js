function draw(n) {
    for (let row = 0; row < (2 * n - 1); row++) {
        let num = "";
        if (row < n) {
            for (let colum = 0; colum < n; colum++) {
                if (colum > row) {
                    num += "-"
                }
                else {
                    num += "*"
                }
            }
        }
        else {
            for (let colum = 0; colum < n; colum++) {
                if ((colum + row) >= 2*n-1) {
                    num += "-"
                }
                else {
                    num += "*"
                }
            }
        }
        console.log(num);
    }
}