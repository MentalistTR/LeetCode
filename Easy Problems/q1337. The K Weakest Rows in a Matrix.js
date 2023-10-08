var kWeakestRows = function(mat, k) {
    let count 
    let result=[]
    let finalResult = []

    for(let i = 0;i < mat.length;i++) {
        count = 0
        for(let j = 0;j <mat[i].length;j++) {
            if(mat[i][j] === 1) {
                count++
            }
        }
        result.push(count)
    }
    
    let arr = [...result]
    arr.sort((a,b) => a-b)
  
      for(let i = 0;i <arr.length;i++) {
        for(let j = 0;j<arr.length;j++) {
            if(arr[i] === result[j] ) {
               
                finalResult.push(j)
                delete result[j]
                break

            }
        }
      }
 

    return finalResult.slice(0,k)
};

kWeakestRows([[1,1,0,0,0],
    [1,1,1,1,0],
    [1,0,0,0,0],
    [1,1,0,0,0],
    [1,1,1,1,1]], 3)