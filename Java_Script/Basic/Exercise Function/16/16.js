function draw(n) {
    let diff = 0;
    for (let row = 0; row < (2 * n - 1); row++) {
        let num = "";
        if (row < n) {
            diff++;
            for (let colum = 0; colum < n; colum++) {
                if (colum > row) {
                    num += "-"
                }
                else {
                    num += `${diff}`
                }
            }
        }
        else {
            diff--;
            for (let colum = 0; colum < n; colum++) {
                if ((colum + row) >= 2*n-1) {
                    num += "-"
                }
                else {
                    num += `${diff}`
                }
            }
        }
        console.log(num);
    }
}