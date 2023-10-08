var canBeEqual = function(target, arr) {
    if(target === arr) {
        return true 
    }
    let hashmap1 = {}
    let hashmap2 = {}

    for(let i = 0; i <target.length;i++) {
        if(!hashmap1[target[i]]) {
            hashmap1[target[i]] = 1
        } else {
            hashmap1[target[i]] += 1
        }
        if(!hashmap2[arr[i]]) {
            hashmap2[arr[i]] = 1
        } else {
            hashmap2[arr[i]] +=1
        }
    }
    for(const j in hashmap1) {
        if(!(j in hashmap2)) {
            return false 
        }
        if((hashmap2[j] !== hashmap1[j])) {
            return false 
        }
    }  
return true    
};