var kidsWithCandies = function(candies, extraCandies) {

    const maxCandies = Math.max(...candies)
    
    let result = [];
    
    for(let i = 0;i < candies.length;i++) {
        if(candies[i] + extraCandies >= maxCandies) {
            result.push(true)
        }
        else{
            result.push(false)
        }
    }
    
    return result
        
    };