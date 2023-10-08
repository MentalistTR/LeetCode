var solution = function(isBadVersion) {
    return function(n) {
        let first = 1, last = n;
        while(first <= last) {
            if(isBadVersion(first)) { 
            console.log(first)
            return first;
            
            }
            first++;
        }
    };
  
};

// 2. yontem 2. yontem 

var solution = function(isBadVersion) {
    return function(n) {
        let min = null;
        let start = 1;
        let end = n;
        
        while(start <= end) {
            const mid = Math.floor((start + end) / 2);
            
            if(isBadVersion(mid)) {
                min = mid;
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return min;
    };
};

