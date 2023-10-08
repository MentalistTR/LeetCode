var shortestToChar = function(s, c) {
    let indexNums = [];
    let result = [];

    for(let i =0;i < s.length;i++) {
        if(s[i] === c) {
            indexNums.push(i);
        }
    }

    for(let j =0;j < s.length;j++) {
        let minDis = Number.MAX_SAFE_INTEGER
        for(let k =0;k < indexNums.length;k++) {
            let tempDis = Math.abs(j - indexNums[k])
            minDis = Math.min(minDis,tempDis)
        }
        result.push(minDis)
    } 
  
return result;
    
};