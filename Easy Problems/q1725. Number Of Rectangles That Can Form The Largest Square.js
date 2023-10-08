var countGoodRectangles = function(rectangles) {
    let count = 0
    let check = 0

    for(let i = 0; i < rectangles.length;i++) {
        let max = Math.min(...rectangles[i])
        if(max > check) {
            check = max 
            count = 0
            count ++
        } else if(max === check) {
            count++
        }

    }
    return count 
};