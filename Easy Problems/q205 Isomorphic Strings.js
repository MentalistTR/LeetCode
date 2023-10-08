var isIsomorphic = function(s, t) {
    if(!s || !t) return false;

    for(let i=0;i < s.length;i++) {
        if(s.indexOf(s[i],i+1) !== t.indexOf(t[i],i+1)) {
            return false
        }

    }
    return true;
    
};

// Using by hashmaps 

var isIsomorphic = function(s, t) {
    let sMap = {}
    let tMap = {}

    for (let i = 0; i < s.length; i ++){
		// you have to check for both maps if repeated characters are mapped to the same repeated characters
        if((sMap[s[i]] && sMap[s[i]] != t[i]) || (tMap[t[i]] && tMap[t[i]] != s[i])){
            return false
        }
        
        sMap[s[i]] = t[i]
        tMap[t[i]] = s[i]
    }
    return true
};