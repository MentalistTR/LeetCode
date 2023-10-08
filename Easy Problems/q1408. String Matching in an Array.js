var stringMatching = function(words) {
    arr = []
    
    for (a of words) {
        for (b of words) {
            if ((a != b) && a.includes(b) && arr.indexOf(b) == -1) {
                arr.push(b)                
            }
        }
    }
    
    return arr
};