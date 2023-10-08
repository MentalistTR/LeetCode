var wordPattern = function(pattern, s) {
    let sArray = s.split(" ");
    let pArray = pattern.split("");

    if(pArray.length !== sArray.length) return false;

    for(let i =0; i < sArray.length; i++) {
        if(sArray.indexOf(sArray[i],i+1) !== pArray.indexOf(pArray[i],i+1)) return false
    }

    return true;
 
};

wordPattern("abba","dog cat cat dog")