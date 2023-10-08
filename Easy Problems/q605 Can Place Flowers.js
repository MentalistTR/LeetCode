var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;

    for(let i =0; i < flowerbed.length && count < n;i++) {
        if(flower[i] == 0) {
            let previous = (i == 0) ? 0 : flowerbed[i-1];
            let next = (i == flowerbed.length -1) ? 0 : flowerbed[i+1];

            if(previous == 0 && next == 0) {
                flowerbed[i] = 1;
                count ++;
            }
        }
    }
return count == n;

};

// sebebi bilinmeyen hata 

var canPlaceFlowers = function(flowerbed, n) {

    let flowerbedCopy = flowerbed;
  

    for(let i = 0;i < flowerbed.length;i++) {
        
        if(flowerbed[i] === 1 && flowerbed[i + n] === 1 ) {
        
            return false
        }
        if(flowerbed[i] === 1) {
            flowerbedCopy[i + n] = 1;
        }
    } 
    for(let j= flowerbedCopy.length -1;j>-1;j--) {
        if(flowerbedCopy[j] === 1 && flowerbedCopy[j -n] === 1) {
            return false
        }

    }

return true
    
};


