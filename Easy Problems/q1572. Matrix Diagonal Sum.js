var diagonalSum = function(mat) {
    const len = mat.length
    let sum = 0
    let mid = Math.floor(len / 2)
    for(let i =0; i < len;i++) {
        sum+= mat[i][i] + mat[i][len-i-1]

    }
     if(len % 2 == 1){
     sum -= mat[mid][mid]
    }
  

    return sum
    
};