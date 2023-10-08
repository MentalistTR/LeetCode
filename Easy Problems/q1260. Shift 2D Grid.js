var shiftGrid = function(grid, k) {
    var arr = grid.flat();
    let len = grid[0].length;
    let result = []

    while(k > 0){
    arr.unshift(arr.pop())
        k--
    }

    while(arr.length) {
        result.push(arr.splice(0,len))
    }
return result 
};

shiftGrid([[1,2,3],[4,5,6],[7,8,9]],1)