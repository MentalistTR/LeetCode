var modifyString = function(s) {
    s = Array.from(s)
    for(let i = 0; i < s.length;i++) {
        if(s[i] === '?') {
            a = s[i-1]
            b = s[i+1]
            if( a != 'a' && b !='a') s[i] = 'a'
       else if( a != 'b' && b !='b') s[i] = 'b'
      else  if( a != 'c' && b !='c') s[i] = 'c'
        }
    }
    
    return s.join('')
    
};

modifyString("?zs")