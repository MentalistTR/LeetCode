var numberOfSteps = function(num) {

    let count = 0

    while(num > 0) {
        if(num % 2 === 0) {
            count++
            num = num / 2
        }
        if(num %2 === 1) {
            count++
            num = num -1
        }
    }
    return count 
    
};