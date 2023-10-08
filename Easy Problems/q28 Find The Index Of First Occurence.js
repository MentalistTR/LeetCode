var strStr = function(haystack, needle) {

    let k = needle.length;
    let p = haystack.length;
    

    for(let i=0; i<p;i++) {
        
      if((haystack.slice(i,i+k)) == needle) {
        
            return i;
            
        } 

      };
      return -1;

    }


strStr("hello","ll");