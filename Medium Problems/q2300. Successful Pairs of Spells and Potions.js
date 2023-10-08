
// O(n2) normal solution 

var successfulPairs = function(spells, potions, success) {
    let count = 0
    let result = []

    for(let i = 0; i < spells.length;i++) {
        count = 0
        for(let j = 0;j <potions.length;j++) {
            let check = spells[i] * potions[j]
            if(check >= success) count++
        }
        result.push(count)
    }
    return result
};

// Binary search solution.

var successfulPairs = function(spells, potions, success) {
    let result = []

    potions.sort((a,b) => a-b)

    for(let i = 0; i < spells.length;i++) {
        let count = 0

        let left = 0
        let right = potions.length -1

        while(left <= right) {
            let mid = Math.floor((left + right) / 2)
            if(spells[i] * potions[mid] >= success) {
                right = mid -1
            } else {
                left = mid + 1
            }
        }
        count = potions.length - left 
        result.push(count)

    }
    return result 
  
}