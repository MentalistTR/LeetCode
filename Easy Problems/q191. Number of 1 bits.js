var hammingWeight = function(n) {
    n = n.toString(2)
    console.log(n)
    
    let count =0;
    
    
    for(let i =0;i<n.length;i++) {
        if(n[i] % 2 == 1) {
            count++
        }
       
    }
   console.log(count)
        
    };

hammingWeight("00000000000000000000000000001011"); 

