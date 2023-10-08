var gcdOfStrings = function(str1, str2) {
    if(str1 + str2 !== str2 + str1) {
        return '';
    }

    let str1length = str1.length;
    let str2length = str2.length;
    let gcd = '';

    for(let i = 1; i <= str2.length;i++) {
        if((str1length % i === 0) && (str2length %i === 0)) {
            gcd = i
        }
    }


return str1.slice(0,gcd)
    
};

gcdOfStrings()