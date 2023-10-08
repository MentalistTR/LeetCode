var numWaterBottles = function(numBottles, numExchange) {
    let count = 0
    let empty = 0
    let full = numBottles
    let new1 = 0

    while(full > 0) {
        count +=full
        empty = full +empty
        if(empty < numExchange) { 
            break
        }
        new1 = Math.floor(empty / numExchange)
        empty = empty % numExchange
        full = new1
        console.log(new1)
      
    }

    return count 
};


numWaterBottles (15,4)

