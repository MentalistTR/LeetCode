var distributeCandies = function(candyType) {

    candyType.sort((a,b) => a-b);
    let count =0;
    let maxLength = candyType.length / 2;
    for(let i =0; i < candyType.length;i++) {
        if(candyType[i] !== candyType[i + 1] ) {
            count++;
        }
    }
    
    if(count > maxLength) {
        return maxLength
        
    }  else {
        return count
    }
};

// 2. yontem hashmap cozumu 

var distributeCandies = function(candyType) {
    const hashmap = {};
    let output = 0;

    for (let i = 0; i < candyType.length; i++) {
        if (!hashmap[candyType[i]]) output++;
        hashmap[candyType[i]] = i + 1;
        if (output === Math.floor(candyType.length/2)) return output;
    }
    
    return output;
};