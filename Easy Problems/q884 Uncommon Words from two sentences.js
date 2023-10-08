var uncommonFromSentences = function(s1, s2) {
    
    s1 = s1.split(' ');
    s2 = s2.split(' ');
    console.log(s1)
    let result = [];
  

    for(let i = 0; i< s1.length;i++) {
        if(s2.includes(s1[i]) === false) {
            result.push(s1[i])
        }
        for(let k = 0;k < s1.length;k++) {
            if(s1[i] === s1[k] && i !== k ) {
                
            }
        }
    }
    for(let j = 0; j< s2.length;j++) {
        if(s1.includes(s2[j]) === false) {
            result.push(s2[j])
        }
    }

    return result 
    
};

uncommonFromSentences("this apple is sweet","this apple is sour")