var maxPower = function(s) {

    let count = 1
    let min = -1

    for(let i = 0 ; i < s.length;i++) {
        if(s[i+1] === s[i]) {
            count++
        } else {
            count = 1
        }
        if( count > min) {
            min = count 
        }
    }
    return min 
    
};