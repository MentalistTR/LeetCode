var repeatedSubstringPattern = function(s) {
    let sub = "";

    for(let i =0; i < Math.floor(s.length / 2);i++) {
        sub += [si]
        if ( sub.repeat(s.length / sub.length) === s) return true
    }

return false 
};

repeatedSubstringPattern("abab")


// 2. yontem 

return s.repeat(2).slice(1, -1).includes(s);