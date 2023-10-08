var isPrefixOfWord = function(sentence, searchWord) {
    sentence = sentence.split(' ');

    for(let i = 0; i < sentence.length;i++) {
        if(!sentence[i].indexOf(searchWord)) {
            return i+1

        }
    }
    return -1 
    
};