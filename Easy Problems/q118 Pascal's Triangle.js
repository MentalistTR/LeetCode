const pascal = function(row) {

    let result = [];

    for(let i =0 ; i < row; i++) {
        result[i] = new Array(i+1);
        result[i][0] = 1;
        result[i][i] = 1;

        for(let j =1;j < i ;j++) {
            result[i][j] = result[i-1][j-1] + result[i-1][j];
        }

       
    }

    console.log(result);



}
pascal(4);