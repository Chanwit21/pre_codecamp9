function draw(n) {
    let diff = 1;
    for (let row = 0; row < (2*n-1); row++) {
        let num = "";
        if (row<n) {
            for (let colum = 0; colum <n; colum++) {
                if ((row + colum)<(n-1)) {
                    num += `-`
                }
                else {
                    num += `${diff}`
                    diff++;
                }

            }
            console.log(num);
        }
        else {
            for (let colum = (n-1) ; colum >=0; colum--) {
                if ((row+colum)>(2*n-2)) {
                    num += `-`
                }
                else {
                    num += `${diff}`
                    diff++;
                }
            }
            console.log(num);
        }
    }
}