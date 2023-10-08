var isPalindrome = function(s) {
  
   s =  s.toLowerCase().replace(/[^0-9a-zA-Z]/g, '');
    
    for(let i =0, j=s.length-1;i<j;i++,j--) {
        if(s[i] !== s[j]) {
            return false
        }
}

return true;
}

isPalindrome("race a car car car car");