var lastStoneWeight = function(stones) {
    while(stones.length >1){
         stones.sort((a, b) => a - b)
         if(stones[stones.length-1]-stones[stones.length-2]===0){
            stones.pop()
            stones.pop()
         } else if (stones[stones.length - 1] - stones[stones.length - 2] !== 0){
            stones[stones.length - 2] = stones[stones.length - 1] - stones[stones.length -2]
            stones.pop()
         }
    }
   return stones
};

lastStoneWeight([3,7,8])