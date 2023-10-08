var isPerfectSquare = function(num) {
    let i = 0;
    while(i < num) {
        if( i * i === num) {
            
            return true;
            
        }
        i++
    }
    return false;
};