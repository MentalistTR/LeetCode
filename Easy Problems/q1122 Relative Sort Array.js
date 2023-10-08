var relativeSortArray = function(arr1, arr2) {
    let result1 = []
    let result2 = [];

    for(let i=0;i <arr2.length;i++) {
        for(let j = 0;j < arr1.length;j++) {
            if(arr1[j] === arr2[i]) {
                result1.push(arr1[j])
            }
           
        }
    }
    for(let k = 0;k < arr1.length;k++) {
        if(result1.includes(arr1[k]) === false) {
            result2.push(arr1[k])
        }
    }
    result2.sort((a,b) => a-b)
   
    return result1.concat(result2)
};

relativeSortArray([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6])