var countGoodTriplets = function(arr, a, b, c) {
    let count = 0
 

    for(let i = 0; i < arr.length;i++) {
        let val1 = arr[i]
        for(let j = i+1; j < arr.length;j++) {
         let val2 = arr[j]
         let diff1 = Math.abs(val1-val2)
         if(diff1 > a) continue
         for(let k = j+1;k < arr.length;k++) {
            let val3 = arr[k];
            let diff2 = Math.abs(val2-val3);
            let diff3 = Math.abs(val1-val3)
            if(diff2 <=b && diff3 <= c) {
                count++
            }
         }
        }
    }

    return count 
    
};