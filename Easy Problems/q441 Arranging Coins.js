var arrangeCoins = function(n) {

    let TargetCoins = 1;
    
    for(let i = 0;i < n;i++) {
        TargetCoins += (i+2);
        if(n < TargetCoins) {
            return i + 1
        }
    
    }
    
    
};

arrangeCoins(5)