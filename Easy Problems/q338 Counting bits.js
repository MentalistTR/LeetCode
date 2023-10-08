var countBits = function(n) {

    let result = [0,1,1];

    for(let i = 3;i <= n;i++) {
        if(i % 2 === 0) {
            result[i] = result[i / 2];
        } else {
            result[i] = result[i - 1] +1;
        }
    }
    console.log(result.slice(0, n + 1))
    return result.slice(0, n + 1);

    
};

countBits(5)