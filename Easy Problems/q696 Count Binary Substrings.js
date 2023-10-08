var countBinarySubstrings = function(s) {

    let cur = 1;
    let prev = 0;
    let sum = 0;

    for(let i=1; i <s.length;i++) {
        if(s[i] === s[i-1]) {
            cur++;

        }

        else {
            sum += Math.min(cur,prev);
            prev = cur;
            cur = 1;

        }
    }

    return sum + Math.min(cur,prev);

    
};