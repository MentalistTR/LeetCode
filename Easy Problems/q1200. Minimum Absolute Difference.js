var minimumAbsDifference = function(arr) {
    const ans = []
    arr.sort((a,b) => a-b);

    let min = Infinity;
    for(let i = 1;i < arr.length;i++) {
        min = Math.min(min,arr[i] - arr[i - 1]);
    }
    console.log(min)

    for(let i = 1; i < arr.length;i++) {
        if( arr[i] - arr[i -1] === min ) {
            ans.push([arr[i-1], arr[i]]);
        }
    }

    return ans 

};

minimumAbsDifference([4,2,1,3])