var checkRecord = function(s) {

    let countA = 0;
    let countL = 0;
   

    for(let i=0;i < s.length;i++) {
        if(s[i] === 'A') {
            countA += 1;
            countL = 0
          
            if(countA >= 2 || countL >=3) {
                return false
            }
        }
        if(s[i] === 'L') {
            countL += 1;
           
            if(countA >= 2 || countL >=3) {
                return false
            }
        }

        if(s[i] === 'P') {
            
            countL = 0;
          
        }
    }

    return true
    
};