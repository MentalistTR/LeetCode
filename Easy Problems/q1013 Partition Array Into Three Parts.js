var canThreePartsEqualSum = function(arr) {
    let arrSum = 0
    let count = 0
    let sum1 = 0
    let divided
 
    for(let i = 0;i < arr.length;i++) {
        arrSum+= arr[i]
    }
    divided = arrSum / 3
    if(arrSum % 3 !== 0) {
        return false 
    }
   
    for(let j = 0;j < arr.length;j++) {
        sum1+= arr[j]
          if(sum1 === divided) {
            count++
            sum1 = 0
          }
          if(count >=3) {
            return true 
          }
    }

return false 

};
canThreePartsEqualSum([30,-23,3,14,-10,4,-6,6,18])