var fairCandySwap = function(aliceSizes, bobSizes) {
    let sum1 = 0
    let sum2 = 0
    let sum3
    let sum4
   

    for(let i = 0;i < aliceSizes.length;i++) {
        sum1 += aliceSizes[i]
    }
    for(let j = 0;j < bobSizes.length;j++) {
        sum2 += bobSizes[j];
    }
 
    sum3 = sum1
    sum4 = sum2

    for(let k =0;k < aliceSizes.length;k++) {
       
    
        for(let p=0;p<bobSizes.length;p++) {
            sum1 = sum3
            sum2 = sum4 
         sum1 -= aliceSizes[k]
         sum1 += bobSizes[p]

         sum2 -= bobSizes[p]
         sum2 +=  aliceSizes[k]
       
         if(sum1 === sum2) {
            return [aliceSizes[k],bobSizes[p]]
         }
        
        }
    }
};

fairCandySwap([2],[1,3]) 