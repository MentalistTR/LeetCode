var diStringMatch = function(s) {
    let size = s.length
    let low = 0
    let high = size
    let result = [];

    for(let i = 0;i < size;i++) {
        if(s[i] === 'I') {
            result.push(low);
            low++;

        } else {
            result.push(high);
            high--;


        }
    }
    result.push(low)
    return result


    
};