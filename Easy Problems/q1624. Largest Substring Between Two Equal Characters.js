var maxLengthBetweenEqualCharacters = function(s) {
    const hashmap = {}

    let maxNumber = -1

    for(let i = 0; i< s.length;i++) {
        if(hashmap[s[i]] !== undefined ) {
            maxNumber = Math.max(i-hashmap[s[i]] -1,maxNumber)


        } else {
            hashmap[s[i]] = i
        }
    }
   
   
    return maxNumber
    
    
};