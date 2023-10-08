var isAlienSorted = function(words, order) {
    let map = {};

    for(let i = 0;i < order.length;i++) {
        map[order[i]] = i
    }

    for(let i = 0;i < words.length-1;i++) {
        for(let j =0;j <words[i].length;j++) {
            if(j >= words[i+1].length) return false 
            if(words[i][j] == words[i+1][j]) {
                continue;
            }
            let p1 = map[words[i][j]]
            let p2 = map[words[i+1][j]]

            if(p1 < p2) {
                break
            } else {
                return false 
            }
        }
    }

    return true 
   
};

isAlienSorted(["hello","leetcode"],"hlabcdefgijkmnopqrstuvwxyz")
