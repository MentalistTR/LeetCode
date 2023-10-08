var luckyNumbers  = function(matrix) {
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(checkMinInRow(matrix,i,j) && checkMaxInCol(matrix,i,j)){
                return [matrix[i][j]]
            }
        }
    }
    return []
};
const checkMinInRow = (matrix,x,y) =>{
    for(let i=0;i<matrix[0].length;i++){
        if(matrix[x][y]>matrix[x][i]){
            return false
        }
    }
    
    return true
}
const checkMaxInCol = (matrix,x,y) =>{
    for(let i=0;i<matrix.length;i++){
        if(matrix[x][y]<matrix[i][y]){
            return false
        }
    }
    
    return true
}

luckyNumbers([[7,8],[1,2]])
    
