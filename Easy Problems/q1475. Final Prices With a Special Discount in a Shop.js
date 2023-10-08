var finalPrices = function(prices) {
    let result = [];
    let dis 

    for(let i = 0; i < prices.length;i++) {
        for(let j = i+1;j < prices.length;j++) {
              if(prices[i] >= prices[j]) {
               dis = prices[i] -prices[j]
               result.push(dis)
               break
              } 
              if(j === prices.length-1) {
                result.push(prices[i])
              }

    }
   
}

   return result
}

// 2. yontem 

var finalPrices = function(prices) {
    let result = [];
  

    for(let i = 0; i < prices.length;i++) {
        let newValue = prices[i]
        for(let j = i+1;j < prices.length;j++) {
              if(prices[i] >= prices[j]) {
                  newValue = prices[i] - prices[j]
                  break
             
              } 
    }
    result.push(newValue)
   
}


   return result
}