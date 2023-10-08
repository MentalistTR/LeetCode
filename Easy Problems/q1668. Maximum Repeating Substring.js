var maxRepeating = function(sequence, word) {
    let count = 0
    let temp = word

    while(sequence.includes(temp)) {
        count++
        temp+=word
    }

    return count 

};