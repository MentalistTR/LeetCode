var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0
    let j
    for(let i = 0; i < items.length;i++) {
        if(ruleKey === "type") {
            j = 0
        } else if (ruleKey === "color") {
            j = 1
        } else {
            j = 2
        }

        if(items[i][j] === ruleValue ) {
            count++
        }
        
    }
    return count 
    
};

// 2. çözüm

var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    items.forEach((item) => {
        if(ruleKey === "type") {
            if(ruleValue === item[0]) count = count + 1;
        }else if(ruleKey === "color") {
            if(ruleValue === item[1]) count = count + 1;
        }else {
            if(ruleValue === item[2]) count = count + 1;
        }
    })
    return count;
};