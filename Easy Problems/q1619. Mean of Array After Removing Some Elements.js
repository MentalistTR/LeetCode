var trimMean = function(arr) {
    let len = arr.length
    let initial = len * 0.05
      arr.sort((a,b) => a-b)

    let result = arr.slice(initial,(len - initial))
    let sum = 0
    for(let i = 0; i < result.length;i++) {
       sum+= result[i]
    }
    return sum / result.length
};