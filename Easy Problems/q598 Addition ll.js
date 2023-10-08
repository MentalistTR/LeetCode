var maxCount = function(m, n, ops) {
    
    var min_row = m;
    var min_col = n;
    for (let i=0; i<ops.length; i++){
        if (ops[i][0]<min_row) min_row=ops[i][0];
        if (ops[i][1]<min_col) min_col=ops[i][1];
    }        
    return min_row*min_col;

};  