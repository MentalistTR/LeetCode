var removeDuplicates = function(s) {

    let stk = [];
    let len = s.length;

    for(let i = 0;i<len;i++) {
        if ( stk[stk.length-1] === s[i]) {
            stk.pop();
        } 
        else {
            stk.push(s[i])
        }
    }

    return stk.join("");
    

};

removeDuplicates("abbaca")