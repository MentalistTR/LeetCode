var totalMoney = function(n) {
    let sum = 0
    let count = 1
    let weekcount = 1

    for(let i = 1; i <=n;i++) {
           sum += count
           count +=1
        if(i % 7 === 0) { 
        weekcount++
        count = weekcount
        }
        
        
    }

    return sum 

};