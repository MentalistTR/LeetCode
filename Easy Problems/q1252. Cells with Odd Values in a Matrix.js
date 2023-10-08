var oddCells = function(m, n, indices) {
    
    const rows = new Array(m).fill(0);
   const cols = new Array(n).fill(0);

    for(const [i,j] of indices) {
       rows[i] ++;
       cols[j]++
    }

    let result = 0

    for(let i =0;i <m;i++) {
       for(let j = 0;j < n;j++) {
           const value = rows[i] + cols[j]
           if(value % 2) result++
       }
    }
   
return result 

};
oddCells(2, 3, [[0,1],[1,1]])