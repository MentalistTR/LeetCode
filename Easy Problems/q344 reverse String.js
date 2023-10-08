var reverseString = function(s) {
  
    
    for(let i =0,j=s.length -1; i < j;i++) {
       
       temp = s[i];
       s[i] = s[j];
       s[j] = temp

       j--

    }

    return s
   
};

reverseString(["h","e","l","l","o"])