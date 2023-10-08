var binaryGap = function(n) {

    n = n.toString(2)
    let max = 0,last =0,i =0;
    while(i < n.length) {
        if(n[i] === '1') {
            let distance = i - last;
            last = i;
            
            max = Math.max(max,distance)
        }
        i++
    }
return max 
    
};

binaryGap(12)