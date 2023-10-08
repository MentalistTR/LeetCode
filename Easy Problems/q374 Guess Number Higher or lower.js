var guessNumber = function(n) {
    let start = 0, end = n-1;

    while(start<=end) {
        let mid = Math.floor((end + start) / 2);

        const getVal = guess(mid)
        if(getVal == 0) {
            return mid
        } else if(getVal == -1) {
            end = mid -1
        } else {
            start = mid + 1;
        }
    }
    return start  
    
};

// Recursion solution 

var guessNumber = function(end, start = 0) {
    const mid = Math.floor((end + start)/2)

    switch(guess(mid)){
        case 0: return mid
        case 1: return guessNumber(end, mid+1)
        case -1: return guessNumber(mid-1, start)
    }
};