var sumOfUnique = function(nums) {
    let hashmap = {}
    let sum = 0
 
    for(let num of nums) {
        if(!hashmap[num]) {
            hashmap[num] = 1
        } else {
            hashmap[num] +=1
        }
    }
    
    for(let num of nums) {
        if(hashmap[num] === 1) sum += num   
    }
    return sum  
 };