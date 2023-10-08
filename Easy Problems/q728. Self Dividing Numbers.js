var selfDividingNumbers = function(left, right) {

    var result = [];

    for(let i= left; i<= right;i++) {
        numStr = i.toString();
        var allPass = true;
    

    for(j = 0; j <numStr.length;j++) {
        if(i % parseInt(numStr[j]) !== 0) {
            allPass = false;
            break;
        }
    }

    if(allPass === false) {
        result.push(i)
    }
 

}

return result
};

selfDividingNumbers(1,22)