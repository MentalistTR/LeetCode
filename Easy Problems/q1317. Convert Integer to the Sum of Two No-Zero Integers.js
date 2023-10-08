var getNoZeroIntegers = function(n) {
    if(n === 2) {
        return [1,1]
    }
    let resulti = []
    let resultj = []

    
    for(let i = 1;i < n;i++) {
         resulti[0] = i

       for(let j = i;j < n;j++) {
           resultj[0] = j
       
        if(i + j === n && resulti[0].toString().includes('0') === false && resultj[0].toString().includes('0') === false) {
            return [i,j]
        }

       }
    }
    
};

// 2. YÖNTEM 2. YÖNTEM 2.YÖNTEM 2. YÖNTEM 

var getNoZeroIntegers = function(n) {
    let int1 = n - 1;
    let int2 = 1;
    
    const hasZero = int => int.toString().includes('0');
    
    while (hasZero(int1) || hasZero(int2)) {
        int1 = int1 - 1;
        int2 = int2 + 1;
    }
    
    return [int1, int2];
};