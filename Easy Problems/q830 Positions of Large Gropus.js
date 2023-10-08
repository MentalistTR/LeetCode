var largeGroupPositions = function(s) {
    const result = [];

    let start = 0;

    for(let i = 0;i< s.length;i++) {
        if(s[i+1] && s[i] !== s[i+1]) {
            if(i - start >=2) {
                result.push([start,i])
            }
            start = i + 1;
        }
    }
   
    if(s.length - 1 - start >= 2) {
        result.push([start,s.length-1])
    }

    return result 
    
};

largeGroupPositions("abbxxxxzzy")