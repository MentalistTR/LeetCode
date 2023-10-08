var heightChecker = function(heights) {
 
    let clone = heights.slice().sort((a,b) => a- b)

   
    let count = 0

    for(let i = 0;i < heights.length;i++) {
        if(heights[i] != clone[i]) {
            count++
        }
    }

    return count 
    
};
heightChecker([1,1,4,2,1,3])