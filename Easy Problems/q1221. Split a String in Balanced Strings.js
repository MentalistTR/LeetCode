var balancedStringSplit = function(s) {

    var balancedCount = 0
    var currentCount = 0

    for(const i of s) {
        if(i == 'R') {
            currentCount++
        }
        else {
            currentCount--
        }

        if(currentCount === 0) {
            balancedCount++
        }
    }

    return balancedCount;
};