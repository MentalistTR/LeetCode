var secondHighest = function(s) {
    let result = 0
    let flag = 0
  
    for(let i = 9; i >= 0;i--) {
        if(s.includes(i.toString())) {
            flag++
            result = i
        }
        if(flag == 2) return result 
    }
  
  
    if(flag < 2) return -1
  };