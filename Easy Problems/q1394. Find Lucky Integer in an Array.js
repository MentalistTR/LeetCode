var findLucky = function(arr) {
    let hash = {}
    for(let i = 0; i < arr.length;i++) {
        if(!hash[arr[i]]) {
            hash[arr[i]] = 1
        }
        else {
            hash[arr[i]] += 1
        }
    }
    const temp = Object.entries(hash);
    for (let i = temp.length - 1; i >= 0; i--) {
        if (temp[i][0] == temp[i][1]) return temp[i][1];
    }
    

    return -1

};