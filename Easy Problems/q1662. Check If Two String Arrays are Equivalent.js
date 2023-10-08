var arrayStringsAreEqual = function(word1, word2) {
    let arr1 =""
    let arr2 = ""

    for(let i = 0; i < word1.length;i++) {
        arr1 += word1[i]
    }

    for(let j = 0; j < word2.length;j++) {
        arr2 += word2[j]
    }

    return arr1 == arr2 ? true:false

}

var arrayStringsAreEqual = function(word1, word2) {
    return word1.join('')===word2.join('')  
  };