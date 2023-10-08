function maxProfit(prices) {

    let maxProfit = 0;
    let minValue = prices[0];

    for(let i =1; i< prices.length; i++) {
        if(minValue > prices[i]) {
            minValue = prices[i];
        }
        if(prices[i] - minValue > maxProfit) {
            maxProfit = prices[i] - minValue;
        }
    }

console.log(maxProfit)



}

   

maxProfit([7,1,5,3,6,4]);