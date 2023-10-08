var truncateSentence = function(s, k) {
    let result = ""
    s = s.split(" ")
    for(let i = 0; i < k;i++) {
        result += s[i]
        if(i === k-1) break
        result += ' '
    }
    return result
    
};

// 2. yontem 


const truncateSentence = (s, k) => {
    const array = s.split(' ');
    
    array.length = k;

    return array.join(' ');
};

// 3.yontem 

var truncateSentence = function(s, k) {
    return s.split(' ').splice(0, k).join(' ')
};