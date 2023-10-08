var transpose = function(matrix) {
    let result = [];

   for(let i = 0;i < matrix[0].length;i++) {
    const d = [];
    for(let j = 0;j < matrix.length;j++) {
        d.push(matrix[j][i])
    }
    result.push(d)
   } 
    return result
};

